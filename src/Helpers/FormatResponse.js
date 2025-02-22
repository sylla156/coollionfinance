const FormatResponse = (AllData) => {
  const data = AllData.data;

  const ResponseLayout = {
    error: !data.success,
    message: data.message,
    errors: data.errors,
    data: data.data,
  };

  return ResponseLayout;
};

export default FormatResponse;
