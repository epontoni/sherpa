import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";
import { v4 as uuidv4 } from "uuid";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    // await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: uuidv4(),
        title: "Course 1",
        imageSrc: "/course-image.jpeg",
        description: "Description of course 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Course 2",
        imageSrc: "/course-image.jpeg",
        description: "Description of course 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Course 3",
        imageSrc: "/course-image.jpeg",
        description: "Description of course 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // await db.insert(schema.units).values([
    //   {
    //     id: 1,
    //     courseId: 1,
    //     title: "Unit 1",
    //     description: "Learn the basics of Spanish",
    //     order: 1,
    //   },
    // ]);

    // await db.insert(schema.lessons).values([
    //   {
    //     id: 1,
    //     unitId: 1,
    //     title: "Nouns",
    //     order: 1,
    //   },
    //   {
    //     id: 2,
    //     unitId: 1,
    //     title: "Verbs",
    //     order: 2,
    //   },
    //   {
    //     id: 3,
    //     unitId: 1,
    //     title: "Verbs 2",
    //     order: 3,
    //   },
    // ]);

    // await db.insert(schema.challenges).values([
    //   {
    //     id: 1,
    //     lessonId: 1,
    //     type: "SELECT",
    //     order: 1,
    //     question: "Wich one of these is 'The man'?",
    //   },
    //   {
    //     id: 2,
    //     lessonId: 1,
    //     type: "ASSIST",
    //     order: 2,
    //     question: "'The man'",
    //   },
    //   {
    //     id: 3,
    //     lessonId: 1,
    //     type: "SELECT",
    //     order: 3,
    //     question: "Wich one of these is 'The robot'?",
    //   },
    // ]);

    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 1,
    //     imageSrc: "/man.svg",
    //     correct: true,
    //     text: "el hombre",
    //     audioSrc: "/es_man.mp3",
    //   },
    //   {
    //     challengeId: 1,
    //     imageSrc: "/woman.svg",
    //     correct: false,
    //     text: "la mujer",
    //     audioSrc: "/es_woman.mp3",
    //   },
    //   {
    //     challengeId: 1,
    //     imageSrc: "/robot.svg",
    //     correct: false,
    //     text: "el robot",
    //     audioSrc: "/es_robot.mp3",
    //   },
    // ]);

    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 2,
    //     //imageSrc: "/man.svg",
    //     correct: true,
    //     text: "el hombre",
    //     audioSrc: "/es_man.mp3",
    //   },
    //   {
    //     challengeId: 2,
    //     //imageSrc: "/woman.svg",
    //     correct: false,
    //     text: "la mujer",
    //     audioSrc: "/es_woman.mp3",
    //   },
    //   {
    //     challengeId: 2,
    //     //imageSrc: "/robot.svg",
    //     correct: false,
    //     text: "el robot",
    //     audioSrc: "/es_robot.mp3",
    //   },
    // ]);

    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 3,
    //     imageSrc: "/man.svg",
    //     correct: false,
    //     text: "el hombre",
    //     audioSrc: "/es_man.mp3",
    //   },
    //   {
    //     challengeId: 3,
    //     imageSrc: "/woman.svg",
    //     correct: false,
    //     text: "la mujer",
    //     audioSrc: "/es_woman.mp3",
    //   },
    //   {
    //     challengeId: 3,
    //     imageSrc: "/robot.svg",
    //     correct: true,
    //     text: "el robot",
    //     audioSrc: "/es_robot.mp3",
    //   },
    // ]);

    // // Challenges and options for lesson 2.
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 4,
    //     lessonId: 2,
    //     type: "SELECT",
    //     order: 1,
    //     question: "Wich one of these is 'The man'?",
    //   },
    //   {
    //     id: 5,
    //     lessonId: 2,
    //     type: "ASSIST",
    //     order: 2,
    //     question: "'The man'",
    //   },
    //   {
    //     id: 6,
    //     lessonId: 2,
    //     type: "SELECT",
    //     order: 3,
    //     question: "Wich one of these is 'The robot'?",
    //   },
    // ]);

    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 4,
    //     imageSrc: "/man.svg",
    //     correct: true,
    //     text: "el hombre",
    //     audioSrc: "/es_man.mp3",
    //   },
    //   {
    //     challengeId: 4,
    //     imageSrc: "/woman.svg",
    //     correct: false,
    //     text: "la mujer",
    //     audioSrc: "/es_woman.mp3",
    //   },
    //   {
    //     challengeId: 4,
    //     imageSrc: "/robot.svg",
    //     correct: false,
    //     text: "el robot",
    //     audioSrc: "/es_robot.mp3",
    //   },
    // ]);

    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 5,
    //     //imageSrc: "/man.svg",
    //     correct: true,
    //     text: "el hombre",
    //     audioSrc: "/es_man.mp3",
    //   },
    //   {
    //     challengeId: 5,
    //     //imageSrc: "/woman.svg",
    //     correct: false,
    //     text: "la mujer",
    //     audioSrc: "/es_woman.mp3",
    //   },
    //   {
    //     challengeId: 5,
    //     //imageSrc: "/robot.svg",
    //     correct: false,
    //     text: "el robot",
    //     audioSrc: "/es_robot.mp3",
    //   },
    // ]);

    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 6,
    //     imageSrc: "/man.svg",
    //     correct: false,
    //     text: "el hombre",
    //     audioSrc: "/es_man.mp3",
    //   },
    //   {
    //     challengeId: 6,
    //     imageSrc: "/woman.svg",
    //     correct: false,
    //     text: "la mujer",
    //     audioSrc: "/es_woman.mp3",
    //   },
    //   {
    //     challengeId: 6,
    //     imageSrc: "/robot.svg",
    //     correct: true,
    //     text: "el robot",
    //     audioSrc: "/es_robot.mp3",
    //   },
    // ]);

    console.log("Seed complete");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
