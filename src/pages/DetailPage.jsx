import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import {
  DELETE_RECORD,
  UPDATE_RECORD,
} from "../redux/reducers/spendings.reducer";
import { DetailPageWrapper } from "./DetailPage.styled";

export function DetailPage() {
  const param = useParams();
  const recordId = param.recordId;
  const records = useSelector((state) => state.spendings);
  const record = records.find((data) => data.id === recordId) ?? {};

  const [date, setDate] = useState(record.date);
  const [item, setItem] = useState(record.item);
  const [amount, setAmount] = useState(record.amount);
  const [description, setDescription] = useState(record.description);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!record) {
    return <div>조회할 수 없는 데이터입니다. ({recordId}).</div>;
  }

  return (
    <DetailPageWrapper>
      <Input label="날짜" value={date} setValue={setDate} type="date" />
      <Input label="항목" value={item} setValue={setItem} />
      <Input label="금액" value={amount} setValue={setAmount} />
      <Input label="내용" value={description} setValue={setDescription} />
      <div>
        <Button
          text="수정"
          handleClick={() => {
            dispatch({
              type: UPDATE_RECORD,
              payload: {
                ...record,
                date,
                item,
                amount,
                description,
              },
            });
            navigate("/");
          }}
        />
        <Button
          text="삭제"
          handleClick={() => {
            dispatch({
              type: DELETE_RECORD,
              payload: { id: recordId },
            });
            navigate("/");
          }}
        />
        <Button text="뒤로가기" handleClick={() => history.back()} />
      </div>
    </DetailPageWrapper>
  );
}
