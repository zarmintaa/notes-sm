import Form from "../components/form/Form";
import DataHelper from "../lib/DataHelper";
import Alert from "../lib/Alert";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/layouts/Wrapper";
import BackButton from "../components/buttons/BackButton";
const Create = () => {
  const navigate = useNavigate();

  const submitHandler = (data) => {
    DataHelper.addDataToLocalstorage(data);
    Alert.alertSuccess("Success", "Sukses manambahkan catatan", () => {
      navigate("/");
    });
  };

  return (
    <Wrapper>
      <Form submitData={submitHandler} />
      <BackButton />
    </Wrapper>
  );
};

export default Create;
