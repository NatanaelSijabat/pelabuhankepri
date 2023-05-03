import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { artikel } from "utils/axios";
import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
];

const AddArtikel: React.FC<AddArtikelProps> = ({
  open,
  onSubmit,
  onCancel,
}) => {
  const [formValues, setFormValues] = React.useState<Artikel>({
    title: "",
    image: null,
    content: "",
  });

  const [form] = Form.useForm();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, title: event.target.value });
  };

  const handleContentChange = (event: any) => {
    setFormValues({ ...formValues, content: event });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      image: event.target.files ? event.target.files[0] : null,
    });
  };

  const handleOk = async () => {
    form
      .validateFields()
      .then(async () => {
        const formData = new FormData();
        formData.append("title", formValues.title);
        formData.append("content", formValues.content);
        if (formValues.image) formData.append("image", formValues.image);

        try {
          const resp = await artikel.post("", formData);
          const data = {
            id: resp.data.id,
            title: resp.data.title,
            content: resp.data.content,
            image: resp.data.image,
          };
          form.resetFields();
          onSubmit(data);
        } catch (error: any) {
          console.log(error.message);
        }
      })
      .catch((info) => {
        console.log(info);
      });
  };

  const handleCancel = () => {
    onCancel();
    form.resetFields();
  };

  return (
    <Modal
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      title="Tambah Data"
      okText="Simpan"
      cancelText="Batal"
    >
      <Form
        initialValues={{ remember: true }}
        autoComplete="off"
        form={form}
        layout="vertical"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input
            id="title"
            type="text"
            value={formValues.title}
            onChange={handleTitleChange}
          />
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please input your content!" }]}
        >
          <QuillNoSSRWrapper
            modules={modules}
            formats={formats}
            theme="snow"
            onChange={handleContentChange}
          />
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please input image!" }]}
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

export default AddArtikel;
