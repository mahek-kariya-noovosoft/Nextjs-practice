export type DailyTasksRowType = {
    date: string;
    topic: string;
    taskType: "Planned" | "Extra";
    status: "Done" | "Incomplete" | "Not Started" | "In Progress";
    time: number;
    notes: string | null;
};
