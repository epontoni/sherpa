import { relations } from "drizzle-orm";
import {
  pgTable,
  uuid,
  text,
  timestamp,
  integer,
  pgEnum,
  boolean,
} from "drizzle-orm/pg-core";

// Courses
export const courses = pgTable("courses", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const coursesRelations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
  units: many(units),
}));

// Units
export const units = pgTable("units", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
  description: text("description").notNull(),
  courseId: uuid("course_id")
    .references(() => courses.id, { onDelete: "cascade" })
    .notNull(),
  order: integer("order").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const unitsRelations = relations(units, ({ many, one }) => ({
  course: one(courses, {
    fields: [units.courseId],
    references: [courses.id],
  }),
  lesson: many(lessons),
}));

// Lessons
export const lessons = pgTable("lessons", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  title: text("title").notNull(),
  videoSrc: text("video_src").notNull(),
  description: text("description").notNull(),
  unitId: uuid("unit_id")
    .references(() => units.id, { onDelete: "cascade" })
    .notNull(),
  order: integer("order").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const lessonsRelations = relations(lessons, ({ many, one }) => ({
  unit: one(units, {
    fields: [lessons.unitId],
    references: [units.id],
  }),
  challenge: many(challenges),
}));

// Challges Enum
export const challengesEnum = pgEnum("type", ["SELECT"]);

// Challenges
export const challenges = pgTable("challenges", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  lessonId: uuid("lesson_id")
    .references(() => lessons.id, { onDelete: "cascade" })
    .notNull(),
  type: challengesEnum("type").notNull(),
  question: text("question").notNull(),
  order: integer("order").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const challengesRelations = relations(challenges, ({ many, one }) => ({
  lesson: one(lessons, {
    fields: [challenges.lessonId],
    references: [lessons.id],
  }),
  challengeOptions: many(challengeOptions),
  challengeProgress: many(challengeProgress),
}));

// Challenges Options
export const challengeOptions = pgTable("challenge_options", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  challengeId: uuid("lesson_id")
    .references(() => challenges.id, { onDelete: "cascade" })
    .notNull(),
  text: text("text").notNull(),
  imageSrc: text("image_src"),
  correct: boolean("correct").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const challengeOptionsRelations = relations(
  challengeOptions,
  ({ one }) => ({
    challenge: one(challenges, {
      fields: [challengeOptions.challengeId],
      references: [challenges.id],
    }),
  })
);

// Challenge Progress
export const challengeProgress = pgTable("challenge_progress", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  userId: uuid("user_id").notNull(),
  challengeId: uuid("lesson_id")
    .references(() => challenges.id, { onDelete: "cascade" })
    .notNull(),
  completed: boolean("completed").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const challengeProgressRelations = relations(
  challengeProgress,
  ({ one }) => ({
    challenge: one(challenges, {
      fields: [challengeProgress.challengeId],
      references: [challenges.id],
    }),
  })
);

export const userProgress = pgTable("user_progress", {
  userId: text("user_id").primaryKey(),
  userName: text("user_name").notNull().default("User"),
  userImageSrc: text("user_image_src").notNull().default("/user.svg"),
  activeCourseId: uuid("active_course_id").references(() => courses.id, {
    onDelete: "cascade",
  }),
  points: integer("points").notNull().default(0),
});

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  activeCourse: one(courses, {
    fields: [userProgress.activeCourseId],
    references: [courses.id],
  }),
}));
