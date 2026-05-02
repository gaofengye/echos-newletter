import { Box, Button, Container, SimpleGrid } from '@mantine/core';
import styles from "./styles.module.scss";
import * as Users from "../../mocks/user";
import { NEWSLETTER } from '@/types/newsletter';
import fetch from 'file-fetch'
import Newsletters from '@/components/Newsletters';

const CURRENT_USER = Users.USER_WITH_MULTIPLE_SUBSCRIPTION

const CONTAINER_MAX_WIDTH = 970;

export default async function Page() {
    const dataTsCode = await (await fetch("file:///home/gao/Documents/echos-newletter/src/mocks/newsletters.ts")).text();
    const arrayString = dataTsCode
        .replace("export const NEWSLETTER_ITEMS =", "")
        .trim()
        .replace(/;$/, "");
    const NEWSLETTER_ITEMS: Array<NEWSLETTER> = Function(`"use strict"; return (${arrayString})`)();

    return <Container size={CONTAINER_MAX_WIDTH} className={[styles.container, (true ? styles.desktopContainer : "")].join(" ")}>
        <Box className={styles.header}>
            <h1 className={styles.h1}>Newsletters</h1>
            <div className={styles.description}>
                Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters. 
            </div>
        </Box>

        <Newsletters title="Les Echos" newsletters={NEWSLETTER_ITEMS.filter((newsletter) => newsletter.site === "DAN")} user={CURRENT_USER} />
       
        <Newsletters title="Les Echos" newsletters={NEWSLETTER_ITEMS.filter((newsletter) => newsletter.site === "LAN")} user={CURRENT_USER} />
    </Container>;
}