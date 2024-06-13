import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import expenseApi from "../api/expense.api";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import useLoginStore from "../zustand/useLoginStore";
import { DetailPageWrapper } from "./DetailPage.styled";

export function DetailPage() {
  const param = useParams();
  const recordId = param.recordId;
  const refInput = useRef([]);
  const navigate = useNavigate();
  const user = useLoginStore((state) => state.user);

  const {
    data: record,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["records", { id: recordId }],
    queryFn: () => expenseApi.get(recordId),
  });

  if (!record || isError) {
    return <div>조회할 수 없는 데이터입니다.</div>;
  } else if (isLoading) {
    return <>loading...</>;
  }

  const handleUpdate = () => {
    expenseApi
      .update(
        {
          ...record,
          date: refInput.current[0].value,
          item: refInput.current[1].value,
          amount: refInput.current[2].value,
          description: refInput.current[3].value,
        },
        user
      )
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const handleDelete = (record) => {
    expenseApi
      .delete(record, user)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <DetailPageWrapper>
      <Input
        label="날짜"
        refer={(ref) => (refInput.current[0] = ref)}
        initialValue={record.date}
        type="date"
      />
      <Input
        label="항목"
        refer={(ref) => (refInput.current[1] = ref)}
        initialValue={record.item}
      />
      <Input
        label="금액"
        refer={(ref) => (refInput.current[2] = ref)}
        initialValue={record.amount}
      />
      <Input
        label="내용"
        refer={(ref) => (refInput.current[3] = ref)}
        initialValue={record.description}
      />
      <div>
        {record.userId === user.id ? (
          <>
            <Button text="수정" handleClick={handleUpdate} />
            <Button text="삭제" handleClick={() => handleDelete(record)} />
          </>
        ) : (
          ""
        )}
        <Button text="뒤로가기" handleClick={() => history.back()} />
      </div>
    </DetailPageWrapper>
  );
}
