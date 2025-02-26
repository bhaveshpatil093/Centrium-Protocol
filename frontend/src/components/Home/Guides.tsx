// import React from "react";
import FeedPost from "./FeedPost";
import guide from "../../assets/guides.png";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Guides() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className=" w-full"
    >
      {feed.map((post, index) => (
        <div key={index}>
          <Link to="/guide">
            <FeedPost {...post} />
          </Link>
        </div>
      ))}
    </motion.div>
  );
}
const feed: {
  username: string;
  date: string;
  title: string;
  demo: string;
  duration: number;
  postType: string;
}[] = [
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "PurpleDNA",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "LAITO",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
  {
    username: "The Rizz King",
    date: "31 jul 2024",
    title: "Navigating writing and reading with Inkworth",
    demo: "As a writer, you can share your literary works with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community, receiving feedback and with a vibrant community",
    duration: 4,
    postType: guide,
  },
];

export default Guides;
