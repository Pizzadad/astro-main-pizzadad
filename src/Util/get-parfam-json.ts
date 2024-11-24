import fs from "fs";
import path from "path";
import type { ParfamWithImages } from "@/interfaces/parfam-with-images.interface";


export const getParfamJson = () => {
    const filePath = path.resolve("./public/data/perfumes-correct.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const parfams: ParfamWithImages[] = JSON.parse(fileContent);

    return parfams;
}