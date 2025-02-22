const promptSchemaPassword = {
  properties: {
    length: {
      description: "Enter the length of the password",
      type: "number",
      required: true
    },
    includeNumbers: {
      description: "Include numbers? (yes/no)",
      type: "string",
      required: true
    },
    includeSymbols: {
      description: "Include symbols? (yes/no)",
      type: "string",
      required: true
    }
  }
};

export default promptSchemaPassword;