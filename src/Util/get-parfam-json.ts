// import fs from "fs";
// import path from "path";
import type { ParfamWithImages } from "@/interfaces/parfam-with-images.interface";


// export const getParfamJson = () => {
//     const filePath = path.resolve("./public/data/perfumes-correct.json");
//     const fileContent = fs.readFileSync(filePath, "utf-8");
//     const parfams: ParfamWithImages[] = JSON.parse(fileContent);

//     return parfams;
// }

export const getParfamJson = async () => {


    const baseUrl = import.meta.env.PUBLIC_BASE_URL || 'http://localhost:4321';

    const response = await fetch(`${baseUrl}/data/perfumes-correct.json`);
    const parfams: ParfamWithImages[] = await response.json();
    return parfams;
};
