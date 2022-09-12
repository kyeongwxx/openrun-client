import { useMutation } from "@apollo/client";
import { useRef } from "react";
import UploadUI from "./Uploads.presenter";
import { UPLOAD_FILE } from "./Uploads.queries";
import { checkValidationImages } from "./Uploads.validation";

export default function Upload(props) {
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event) => {
    const file = checkValidationImages(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile, props.index);
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <UploadUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
