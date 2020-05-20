import { useState, useEffect } from "react";
import moment from "moment";
import { firebase } from "../Firebase/firebase";
import { collectedTaskExists } from "../helpers";

const UseTasks = (selectedProjects) => {
  const [tasks, setTasks] = useState({});
  const [archivedTasks, setArchivedTasks ] = useState({});

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "fsa75645");

    unsubscribe =
      selectedProjects && !collectedTaskExists(selectedProjects)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProjects))
        : selectedProjects === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProjects === "INBOX" || selectedProjects === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((onSnapshot) => {
      const newTasks = onSnapshot.docs.map((tasks) => ({
        id: tasks.id,
        ...tasks.data(),
      }));

      setTasks(
        selectedProjects === "NEXT_7"
          ? newTasks.filter(
              (tasks) =>
                moment(task.date, "DD/MM/YYYY").diff(moment(), "days") <= 7 &&
                tasks.archived !== true
            )
          : newTasks.filter(task => tasks.archived !== true)
      );
      setArchivedTasks(newTasks.filter(task => task.archived !== false));

      return () => unsubscribe();
    });
  }, [selectedProjects]);

  return { tasks, archivedTasks };
};

export default UseTasks;
