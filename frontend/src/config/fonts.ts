

import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import localFont from "next/font/local";


export const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ['400', '700'] });
export const manrope = Manrope({ subsets: ["latin"], weight: 'variable' });

// export const manrope = localFont({
//     src: "../",
//     variable: "--font-manrope",
//     weight: "100 900",
//   });