/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
import fs from "fs";
import http from "http";
import url from "url";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        //string
        let név: string = "Vicc Elek";
        res.write(`Név: ${név}\n`);
        //bool
        let igaz: boolean = true;
        if (igaz) {
            res.write("Igaz!\n");
        }
        //tömb
        let család: string[] = ["Tomi", "Krisz", "Kristóf"];
        res.write(`${család}\n`);
        //enum
        enum Bolt {
            kenyér,
            krumpli,
            zab,
            répa
        }
        res.write(`${Bolt}\n`);
        //union
        let password: string | number;
        password = 12345;
        res.write(`${password}\n`);
        password = "alma14";
        res.write(`${password}\n`);
        //any
        let bármi: any = "Szia Cica!";
        res.write(`${bármi}\n`);
        bármi = 455;
        res.write(`${bármi}\n`);
        bármi = true;
        res.write(`${bármi}\n`);
        //void
        function adjPacsit(): void {
            res.write("Pacsi!!!!!\n");
        }

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
