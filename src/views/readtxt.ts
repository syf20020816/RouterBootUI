export const read = (event: any) => {
  let reader = new FileReader();
  let inStream = event.target;
  reader.onload = () => {
    console.log(reader.result);
  };
  reader.readAsText(inStream.files[0]);
};
