"use client";

import { merriweather } from "@/app/newsletters/layout";
import { NEWSLETTER } from "@/types/newsletter";
import { Box, Button, SimpleGrid } from "@mantine/core";
import { FC } from "react";
import styles from "./styles.module.scss";
import { USER } from "@/types/user";

const MOBILE_BREAKPOINT = "768px";

type Props = {
    title: string;
    newsletters: Array<NEWSLETTER>;
    user: USER;
}

const Newsletters: FC<Props> = ({ title, newsletters, user }) => {
    return  <Box className={styles.newsletters}>
            <h2 className={styles.h2}>{title}</h2>
            <SimpleGrid type="container" cols={{ base: 1, [MOBILE_BREAKPOINT]: 3 }}>
                {newsletters.length > 0 && newsletters.map((newsletter: NEWSLETTER) => 
                    <Box key={newsletter.title} className={styles.newsletter}>
                        <Box className={[styles.image, merriweather.className].join(" ")}>
                            {newsletter.title}
                        </Box>
                        <Box className={styles.description}>
                            {newsletter.description}
                        </Box>
                            {newsletter.subscriptions.some((sub: string) => (user.subscriptions as Array<string>).includes(sub)) ?
                                <Button className={styles.registerButton}>S'inscrire</Button>
                            :   <Button className={styles.subscribeButton}>S'abonner</Button>
                            }
                    </Box>
                )}
            </SimpleGrid>
        </Box>
}

export default Newsletters;