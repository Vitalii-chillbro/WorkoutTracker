import React from "react";
import styled from "styled-components";

const ResultsContainer = styled.div`
  margin-top: 20px;
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const Date = styled.div`
  font-weight: bold;
`;

const Weights = styled.div`
  margin-top: 5px;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Results: React.FC<{
  savedData: { id: string; date: string; weights: (number | undefined)[] }[];
  onDelete: (id: string) => void;
  exercises: string[];
}> = ({ savedData, onDelete, exercises }) => {
  return (
    <ResultsContainer>
      {savedData.map((data) => (
        <ResultItem key={data.id}>
          <div>
            <Date>{data.date}</Date>
            <Weights>
              {data.weights
                .map((w, index) =>
                  w !== undefined ? `${exercises[index]}: ${w} kg` : null
                )
                .filter((item) => item !== null)
                .join(", ")}
            </Weights>
          </div>
          <DeleteButton onClick={() => onDelete(data.id)}>X</DeleteButton>
        </ResultItem>
      ))}
    </ResultsContainer>
  );
};

export default Results;
