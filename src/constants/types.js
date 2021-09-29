// We can extend these to many
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";

export const Types = [
    {
        name: "Rock",
        img: rock,
        win: ["Scissors"],
    },
    {
        name: "Paper",
        img: paper,
        win: ["Rock"],
    },
    {
        name: "Scissors",
        img: scissors,
        win: ["Paper"],
    }
];