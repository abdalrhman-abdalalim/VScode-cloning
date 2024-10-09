import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClickedFile, IFile, IinitialFile } from "../../../interfaces";


const initialState: IinitialFile  = {
  openFiles: [],
  clickedFile: {
    activeId:null,
    fileName: "",
    fileContent: "",
  },
  tabIdToRemove:""
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles(state, action: PayloadAction<IFile[]>) {
      state.openFiles = action.payload;
    },
    setClickedFile(state, action: PayloadAction<IClickedFile>) {
      state.clickedFile.fileName = action.payload.fileName;
      state.clickedFile.fileContent = action.payload.fileContent;
      state.clickedFile.activeId = action.payload.activeId;
    },
    setIdToRemove(state, action: PayloadAction<string|null>) {
      state.tabIdToRemove = action.payload;
    },
  },
});

export const { setOpenedFiles, setClickedFile ,setIdToRemove} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
