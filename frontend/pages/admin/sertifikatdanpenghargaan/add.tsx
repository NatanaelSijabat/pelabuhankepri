import React from "react";
import { sertifikat } from "utils/axios";
import { Form, Input, Modal } from "antd";

const AddSertifikat: React.FC<AddSertifikatProps> = ({
  open,
  onSubmit,
  onCancel,
}) => {
  const [title, setTitle] = React.useState<string>("");
  const [image, setImage] = React.useState<File | null>(null);

  const [form] = Form.useForm();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files ? event.target.files[0] : null);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await sertifikat.post("", formData);
      console.log(response.data);
      const newData = {
        id: response.data.id,
        title: response.data.title,
        image: response.data.image,
      };
      form.resetFields();
      onSubmit(newData);
    } catch (error) {}
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      open={open}
      title="Tambah Data"
      okText="Simpan"
      cancelText="Batal"
      onCancel={handleCancel}
      onOk={handleSubmit}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        autoComplete="off"
      >
        <Form.Item
          name={"title"}
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input title",
            },
          ]}
        >
          <Input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </Form.Item>
        <Form.Item
          name={"image"}
          label="Image"
          rules={[
            {
              required: true,
              message: "Please select Image",
            },
          ]}
        >
          <Input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddSertifikat;
