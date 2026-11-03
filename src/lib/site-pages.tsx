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
  "English/Season1/Episodes/Episode1.html": {
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
            <Link className={"Zuruck"} href={"/English/Season1/index.html"}>
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
          {"\r\n  © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "English/Season1/index.html": {
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
            <Link className={"Home"} href={"/English/index.html"}>
              {"Back"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode1.html"}>
              {"Episode 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode2.html"}>
              {"Episode 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode3.html"}>
              {"Episode 3"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode4.html"}>
              {"Episode 4"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode5.html"}>
              {"Episode 5"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode6.html"}>
              {"Episode 6"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode7.html"}>
              {"Episode 7"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode8.html"}>
              {"Episode 8"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode9.html"}>
              {"Episode 9"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode10.html"}>
              {"Episode 10"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode11.html"}>
              {"Episode 11"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode12.html"}>
              {"Episode 12"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E1"} href={"/English/Season1/Episodes/Episode13.html"}>
              {"Episode 13"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode14.html"}>
              {"Episode 14"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode15.html"}>
              {"Episode 15"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode16.html"}>
              {"Episode 16"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode17.html"}>
              {"Episode 17"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode18.html"}>
              {"Episode 18"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode19.html"}>
              {"Episode 19"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode20.html"}>
              {"Episode 20"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode21.html"}>
              {"Episode 21"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode22.html"}>
              {"Episode 22"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/English/Season1/Episodes/Episode23.html"}>
              {"Episode 23"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "English/index.html": {
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
            <Link className={"Home"} href={"/index.html"}>
              {"Back"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season1/index.html"}>
              {"Season 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season2/index.html"}>
              {"Season 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season3/index.html"}>
              {"Season 3"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S1"} href={"/English/Season4/index.html"}>
              {"Season 4"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season5/index.html"}>
              {"Season 5"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season6/index.html"}>
              {"Season 6"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S1"} href={"/English/Seasonl7/index.html"}>
              {"Season 7"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season8/index.html"}>
              {"Season 8"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/English/Season9/index.html"}>
              {"Season 9"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge1.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
            {"\r\n      © 2024 Freetime Maker\r\n    "}
          </footer>
          {"\r\n"}
        </div>
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge10.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge11.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge12.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge13.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge14.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge15.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge16.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge17.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge18.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge19.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge2.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge20.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge21.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge22.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge23.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge3.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge4.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge5.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge6.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge7.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge8.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/Folgen/Folge9.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel1/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel1/index.html": {
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
            <Link className={"Home"} href={"/German/index.html"}>
              {"Zurück"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge1.html"}>
              {"Folge 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge2.html"}>
              {"Folge 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge3.html"}>
              {"Folge 3"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge4.html"}>
              {"Folge 4"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge5.html"}>
              {"Folge 5"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge6.html"}>
              {"Folge 6"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge7.html"}>
              {"Folge 7"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge8.html"}>
              {"Folge 8"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge9.html"}>
              {"Folge 9"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge10.html"}>
              {"Folge 10"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge11.html"}>
              {"Folge 11"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge12.html"}>
              {"Folge 12"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E1"} href={"/German/Staffel1/Folgen/Folge13.html"}>
              {"Folge 13"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge14.html"}>
              {"Folge 14"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge15.html"}>
              {"Folge 15"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge16.html"}>
              {"Folge 16"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge17.html"}>
              {"Folge 17"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge18.html"}>
              {"Folge 18"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge19.html"}>
              {"Folge 19"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge20.html"}>
              {"Folge 20"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge21.html"}>
              {"Folge 21"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge22.html"}>
              {"Folge 22"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel1/Folgen/Folge23.html"}>
              {"Folge 23"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel2/Folgen/Folge1.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel2/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel2/Folgen/Folge2.html": {
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
            <Link className={"Zuruck"} href={"/German/Staffel2/index.html"}>
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
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/Staffel2/index.html": {
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
            <Link className={"Home"} href={"/German/index.html"}>
              {"Zurück"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge1.html"}>
              {"Folge 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge2.html"}>
              {"Folge 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"24"}>
            {"\r\n        "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge3.html"}>
              {"Folge 3"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge4.html"}>
              {"Folge 4"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge5.html"}>
              {"Folge 5"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge6.html"}>
              {"Folge 6"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge7.html"}>
              {"Folge 7"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge8.html"}>
              {"Folge 8"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge9.html"}>
              {"Folge 9"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge10.html"}>
              {"Folge 10"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge11.html"}>
              {"Folge 11"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge12.html"}>
              {"Folge 12"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E1"} href={"/German/Staffel2/Folgen/Folge13.html"}>
              {"Folge 13"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge14.html"}>
              {"Folge 14"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge15.html"}>
              {"Folge 15"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge16.html"}>
              {"Folge 16"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge17.html"}>
              {"Folge 17"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge18.html"}>
              {"Folge 18"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge19.html"}>
              {"Folge 19"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge20.html"}>
              {"Folge 20"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge21.html"}>
              {"Folge 21"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge22.html"}>
              {"Folge 22"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c24"}>
            {"\r\n      "}
            <Link className={"E"} href={"/German/Staffel2/Folgen/Folge23.html"}>
              {"Folge 23"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "German/index.html": {
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
            <Link className={"Home"} href={"/index.html"}>
              {"Zurück"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel1/index.html"}>
              {"Staffel 1"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel2/index.html"}>
              {"Staffel 2"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel3/index.html"}>
              {"Staffel 3"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S1"} href={"/German/Staffel4/index.html"}>
              {"Staffel 4"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel5/index.html"}>
              {"Staffel 5"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel6/index.html"}>
              {"Staffel 6"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S1"} href={"/German/Staffel7/index.html"}>
              {"Staffel 7"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel8/index.html"}>
              {"Staffel 8"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c10"}>
            {"\r\n        "}
            <Link className={"S"} href={"/German/Staffel9/index.html"}>
              {"Staffel 9"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n  "}
        </div>
        {"\r\n  "}
        <footer>
          {"\r\n    © 2024 Freetime Maker\r\n  "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
  "index.html": {
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
            <Link href={"/German/index.html"}>
              {"\r\n        "}
              <img src={"https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Germany_%283-2%29.svg/250px-Flag_of_Germany_%283-2%29.svg.png?utm_source=de.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"} />
              {"\r\n      "}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link href={"/English/index.html"}>
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
            <Link className={"English"} href={"/English/index.html"}>
              {"English"}
            </Link>
            {"\r\n    "}
          </div>
          {"\r\n    "}
          <div className={"c2"}>
            {"\r\n      "}
            <Link className={"German"} href={"/German/index.html"}>
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
          {"\r\n      © 2024 Freetime Maker\r\n    "}
        </footer>
        {"\r\n"}
      </>
    ),
  },
};
