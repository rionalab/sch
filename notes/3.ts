  const [loadingEdit, setLoadingEdit] = useState(false);
    setLoadingEdit(true);
    setLoadingEdit(false);
      {loadingEdit && <LoadingModule />}
      className={loadingEdit ? "dNone" : ""}
      import { ButtonForm, LoadingModule } from "@/c";



      <Form.Item<FormFields>
      label="Active"
      name="status"
      rules={fieldRules(["required"])}
    >
      <Select options={trueFalseOptions} />
    </Form.Item>