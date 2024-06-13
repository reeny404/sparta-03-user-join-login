import InitialRecords from "../../InitialRecords";

export const ADD_RECORD = "ADD_RECORD";
export const UPDATE_RECORD = "UPDATE_RECORD";
export const DELETE_RECORD = "DELETE_RECORD";

const spendingsReducer = (prevState = InitialRecords, action) => {
  const newRecord = action.payload;

  switch (action.type) {
    case ADD_RECORD:
      return [...prevState, newRecord];
    case UPDATE_RECORD:
      return [
        ...prevState.map((record) =>
          record.id === newRecord.id ? newRecord : record
        ),
      ];
    case DELETE_RECORD: {
      return [...prevState.filter((v) => v.id !== newRecord.id)];
    }
    default:
      return prevState;
  }
};

export default spendingsReducer;
