import React, { useState, useEffect } from "react";
import { validateWeights } from "../utils/helpers";
import WeightInput from "../components/WeightInput";
import SaveButton from "./SaveButton";
import Results from "./Results";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const exercises = [
  "Жим гантелей 4х12",
  "Бруси 4х8",
  "Підйом на біцепс стоячи 4х10",
  "Лавка Скота 4х8",
];

const DayTwo: React.FC = () => {
  const [weights, setWeights] = useState<(number | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const [savedData, setSavedData] = useState<
    { id: string; weights: (number | undefined)[]; date: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaveDisabled, setIsSaveDisabled] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "weightsDayTwo"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as { id: string; weights: (number | undefined)[]; date: string }[];
      setSavedData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSaveProgress = async () => {
    if (validateWeights(weights)) {
      return;
    }

    const currentDate = new Date().toLocaleString();
    const newData = { weights, date: currentDate };

    const docRef = await addDoc(collection(db, "weightsDayTwo"), newData);
    const savedItem = { id: docRef.id, ...newData };

    setSavedData((prevSavedData) => [...prevSavedData, savedItem]);
    setWeights([undefined, undefined, undefined]);
    setIsSaveDisabled(true);
  };

  const handleInputChange = (index: number, value: number | undefined) => {
    const updatedWeights = [...weights];
    updatedWeights[index] = value;
    setWeights(updatedWeights);
    setIsSaveDisabled(validateWeights(updatedWeights));
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "weightsDayTwo", id));
    setSavedData((prevSavedData) =>
      prevSavedData.filter((item) => item.id !== id)
    );
  };

  useEffect(() => {
    setIsSaveDisabled(validateWeights(weights));
  }, [weights]);

  return (
    <>
      {exercises.map((exercise, index) => (
        <WeightInput
          key={index}
          label={exercise}
          value={weights[index]}
          onChange={(value) => handleInputChange(index, value)}
        />
      ))}
      <SaveButton onClick={handleSaveProgress} disabled={isSaveDisabled}>
        Save Progress
      </SaveButton>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Results
          savedData={savedData}
          onDelete={handleDelete}
          exercises={exercises}
        />
      )}
    </>
  );
};

export default DayTwo;
