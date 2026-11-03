import Link from "next/link";
import type { ReactNode } from "react";
import Player from "../app/player";

export type SitePage = {
  title: string;
  /** Original stylesheet directory, without a leading/trailing slash; root is empty. */
  cssKey: string;
  content: ReactNode;
};

/** Keys are original relative HTML paths; content contains only the original body. */
export const pages: Record<string, SitePage> = {
  "English/Season1/Episodes/Episode1": {
    title: "The Flash Season 1 Episode 1",
    cssKey: "English/Season1/Episodes",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Episode 1"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/English/Season1"}>
              {"Season 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            <Player src={"/api/videos/English/Season1/Episodes/Videos/Episode1.mp4"} />
          </div>
          {"\r\n  "}
        </div>
        {"\r\n "}
        <footer>
          {"\r\n  © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "English/Season1": {
    title: "The Flash Season 1",
    cssKey: "English/Season1",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Season 1"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"Home"} href={"/English"}>
              {"Back"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode1"}>
              {"Episode 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode2"}>
              {"Episode 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode3"}>
              {"Episode 3"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode4"}>
              {"Episode 4"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode5"}>
              {"Episode 5"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode6"}>
              {"Episode 6"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode7"}>
              {"Episode 7"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode8"}>
              {"Episode 8"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode9"}>
              {"Episode 9"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode10"}>
              {"Episode 10"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode11"}>
              {"Episode 11"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode12"}>
              {"Episode 12"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E1"} href={"/English/Season1/Episodes/Episode13"}>
              {"Episode 13"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode14"}>
              {"Episode 14"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode15"}>
              {"Episode 15"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode16"}>
              {"Episode 16"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode17"}>
              {"Episode 17"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode18"}>
              {"Episode 18"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode19"}>
              {"Episode 19"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode20"}>
              {"Episode 20"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode21"}>
              {"Episode 21"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode22"}>
              {"Episode 22"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode23"}>
              {"Episode 23"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "English": {
    title: "The Flash English",
    cssKey: "English",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"The Flash English"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n      "}
            <Link className={"Home"} href={""}>
              {"Back"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season1"}>
              {"Season 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season2"}>
              {"Season 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season3"}>
              {"Season 3"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S1"} href={"/English/Season4"}>
              {"Season 4"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season5"}>
              {"Season 5"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season6"}>
              {"Season 6"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S1"} href={"/English/Seasonl7"}>
              {"Season 7"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season8"}>
              {"Season 8"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season9"}>
              {"Season 9"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge1": {
    title: "The Flash Staffel 1 Folge 1",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 1"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge1.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <footer>
            {"\r\n      © 2026 Freetime Maker\r\n    "}
          </footer>
          {"\r\n"}
        </div>
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge10": {
    title: "The Flash Staffel 1 Folge 10",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 10"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge10.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge11": {
    title: "The Flash Staffel 1 Folge 11",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 11"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge11.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge12": {
    title: "The Flash Staffel 1 Folge 12",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 12"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n        "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge12.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge13": {
    title: "The Flash Staffel 1 Folge 13",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 13"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n        "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge13.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge14": {
    title: "The Flash Staffel 1 Folge 14",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 14"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n        "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge14.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge15": {
    title: "The Flash Staffel 1 Folge 15",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 15"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n        "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge15.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge16": {
    title: "The Flash Staffel 1 Folge 16",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 16"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n        "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge16.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge17": {
    title: "The Flash Staffel 1 Folge 17",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 17"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n        "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge17.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge18": {
    title: "The Flash Staffel 1 Folge 18",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 18"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge18.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge19": {
    title: "The Flash Staffel 1 Folge 19",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 19"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge19.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge2": {
    title: "The Flash Staffel 1 Folge 2",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 2"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge2.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge20": {
    title: "The Flash Staffel 1 Folge 20",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 20"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge20.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge21": {
    title: "The Flash Staffel 1 Folge 21",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 21"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n        "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge21.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge22": {
    title: "The Flash Staffel 1 Folge 22",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 22"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n  "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge22.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge23": {
    title: "The Flash Staffel 1 Folge 23",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 23"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge23.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge3": {
    title: "The Flash Staffel 1 Folge 3",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 3"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge3.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge4": {
    title: "The Flash Staffel 1 Folge 4",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 4"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge4.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge5": {
    title: "The Flash Staffel 1 Folge 5",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 5"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge5.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge6": {
    title: "The Flash Staffel 1 Folge 6",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 6"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge6.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge7": {
    title: "The Flash Staffel 1 Folge 7",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 7"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge7.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge8": {
    title: "The Flash Staffel 1 Folge 8",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 8"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge8.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge9": {
    title: "The Flash Staffel 1 Folge 9",
    cssKey: "German/Staffel1/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 9"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n     "}
            <Player src={"/api/videos/German/Staffel1/Folgen/Videos/Folge9.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1": {
    title: "The Flash Staffel 1",
    cssKey: "German/Staffel1",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Staffel 1"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"Home"} href={"/German"}>
              {"Zurück"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge1"}>
              {"Folge 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge2"}>
              {"Folge 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge3"}>
              {"Folge 3"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge4"}>
              {"Folge 4"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge5"}>
              {"Folge 5"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge6"}>
              {"Folge 6"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge7"}>
              {"Folge 7"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge8"}>
              {"Folge 8"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge9"}>
              {"Folge 9"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge10"}>
              {"Folge 10"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge11"}>
              {"Folge 11"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge12"}>
              {"Folge 12"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E1"} href={"/German/Staffel1/Folgen/Folge13"}>
              {"Folge 13"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge14"}>
              {"Folge 14"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge15"}>
              {"Folge 15"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge16"}>
              {"Folge 16"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge17"}>
              {"Folge 17"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge18"}>
              {"Folge 18"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge19"}>
              {"Folge 19"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge20"}>
              {"Folge 20"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge21"}>
              {"Folge 21"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge22"}>
              {"Folge 22"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge23"}>
              {"Folge 23"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel2/Folgen/Folge1": {
    title: "The Flash Staffel 2 Folge 1",
    cssKey: "German/Staffel2/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 1"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel2"}>
              {"Staffel 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Player src={"/api/videos/German/Staffel2/Folgen/Videos/Folge1.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel2/Folgen/Folge2": {
    title: "The Flash Staffel 2 Folge 2",
    cssKey: "German/Staffel2/Folgen",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Folge 2"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"Zuruck"} href={"/German/Staffel2"}>
              {"Staffel 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n        "}
            <Player src={"/api/videos/German/Staffel2/Folgen/Videos/Folge2.mp4"} />
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel2": {
    title: "The Flash Staffel 2",
    cssKey: "German/Staffel2",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"Staffel 2"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"Home"} href={"/German"}>
              {"Zurück"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge1"}>
              {"Folge 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge2"}>
              {"Folge 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge3"}>
              {"Folge 3"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge4"}>
              {"Folge 4"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge5"}>
              {"Folge 5"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge6"}>
              {"Folge 6"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge7"}>
              {"Folge 7"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge8"}>
              {"Folge 8"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge9"}>
              {"Folge 9"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge10"}>
              {"Folge 10"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge11"}>
              {"Folge 11"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge12"}>
              {"Folge 12"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E1"} href={"/German/Staffel2/Folgen/Folge13"}>
              {"Folge 13"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge14"}>
              {"Folge 14"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge15"}>
              {"Folge 15"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge16"}>
              {"Folge 16"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge17"}>
              {"Folge 17"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge18"}>
              {"Folge 18"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge19"}>
              {"Folge 19"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge20"}>
              {"Folge 20"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge21"}>
              {"Folge 21"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge22"}>
              {"Folge 22"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge23"}>
              {"Folge 23"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German": {
    title: "The Flash Deutsch",
    cssKey: "German",
    content: (
      <>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"The Flash Deutsch"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r2"}>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n      "}
            <Link className={"Home"} href={""}>
              {"Zurück"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel1"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel2"}>
              {"Staffel 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel3"}>
              {"Staffel 3"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S1"} href={"/German/Staffel4"}>
              {"Staffel 4"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel5"}>
              {"Staffel 5"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel6"}>
              {"Staffel 6"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S1"} href={"/German/Staffel7"}>
              {"Staffel 7"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel8"}>
              {"Staffel 8"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel9"}>
              {"Staffel 9"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2026 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "": {
    title: "The Flash",
    cssKey: "",
    content: (
      <>
        {"\r\n  "}
        <div className={"r3"}>
          {"\r\n    "}
          <h1 className={"Titel"}>
            {"The Flash"}
          </h1>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r3"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link href={"/German"}>
              {"\r\n        "}
              <img src={"https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Germany_%283-2%29.svg/250px-Flag_of_Germany_%283-2%29.svg.png?utm_source=de.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"} />
              {"\r\n      "}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link href={"/English"}>
              {"\r\n        "}
              <img src={"https://cdn.pixabay.com/photo/2012/04/23/16/15/flags-38754_1280.png"} />
              {"\r\n      "}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <a href={"https://snapcraft.io/freetimemaker-flash"} target={"_blank"}>
              {"\r\n      "}
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNj2gNhPha9V2NlwGOSTJ659f18NabS3jDQ&s"} />
              {"\r\n    "}
            </a>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <div className={"r3"}>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"English"} href={"/English"}>
              {"English"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"German"} href={"/German"}>
              {"Deutsch"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <a className={"Snap"} href={"https://snapcraft.io/freetimemaker-flash"} target={"_blank"}>
              {"Download"}
            </a>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n\r\n    "}
        <footer>
          {"\r\n      © 2026 Freetime Maker\r\n    "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
};
