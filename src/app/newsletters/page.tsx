import { Box, Button, Container, SimpleGrid } from '@mantine/core';
import styles from "./styles.module.scss";
import * as Users from "../../mocks/user";
import { NEWSLETTER } from '@/types/newsletter';
import { merriweather } from './layout';
import path from 'path';
import fetch from 'file-fetch'

const CURRENT_USER = Users.USER_WITH_MULTIPLE_SUBSCRIPTION

const CONTAINER_MAX_WIDTH = 970;
const MOBILE_BREAKPOINT = "768px";

export default async function Page() {
    //const data = await fetch(new URL(path.join(__dirname, '../../../../src/mocks/newsletters.ts')))
    console.log(new URL(path.join(__dirname, '../../../../src/mocks/newsletters.ts')));
    const data = await fetch("file:///home/gao/echos-newletter/src/mocks/newsletters.ts");
    console.log(data);

    return <Container size={CONTAINER_MAX_WIDTH} className={[styles.container, (true ? styles.desktopContainer : "")].join(" ")}>
        <Box className={styles.header}>
            <h1 className={styles.h1}>Newsletters</h1>
            <div className={styles.description}>
                Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters. 
            </div>
        </Box>

        <Box className={styles.newsletters}>
            <h2 className={styles.h2}>Les Echos</h2>
            <SimpleGrid type="container" cols={{ base: 1, [MOBILE_BREAKPOINT]: 3 }}>
                {[].length > 0 && [].filter((newsletter) => newsletter.site.includes("DAN")).map((newsletter: NEWSLETTER) => 
                    <Box className={styles.newsletter}>
                        <Box className={[styles.image, merriweather.className].join(" ")}>
                            {newsletter.title}
                        </Box>
                        <Box className={styles.description}>
                            {newsletter.description}
                        </Box>
                            {newsletter.subscriptions.some((sub: string) => (CURRENT_USER.subscriptions as Array<string>).includes(sub)) ?
                                <Button className={styles.registerButton}>S'inscrire</Button>
                            :   <Button className={styles.subscribeButton}>S'abonner</Button>
                            }
                    </Box>
                )}
            </SimpleGrid>
        </Box>

        <Box className={styles.newsletters}>
            <h2 className={styles.h2}>Investir</h2>
            <SimpleGrid type="container" cols={{ base: 1, [MOBILE_BREAKPOINT]: 3 }}>
                {[].length > 0 && [].filter((newsletter) => newsletter.site.includes("LAN")).map((newsletter: NEWSLETTER) => 
                    <Box className={styles.newsletter}>
                        <Box className={styles.image}>
                            {newsletter.title}
                        </Box>
                        <Box className={styles.description}>
                            {newsletter.description}
                        </Box>
                            {newsletter.subscriptions.some((sub: string) => (CURRENT_USER.subscriptions as Array<string>).includes(sub)) ?
                                <Button className={styles.registerButton}>S'inscrire</Button>
                            :   <Button className={styles.subscribeButton}>S'abonner</Button>
                            }
                    </Box>
                )}
            </SimpleGrid>
        </Box>
    </Container>;
}