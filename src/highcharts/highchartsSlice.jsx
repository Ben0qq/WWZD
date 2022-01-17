import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    points: [],
    status: 'idle',
    dialogOpen: 'false'
};

export const getUmap = createAsyncThunk(
    'highcharts/umap',
    async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/umap', {
                headers:{
                    maxContentLength: Infinity,
                    maxBodyLength: Infinity
                }
            })
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.log(error.response.data)
            
            console.log('test')
            return (error.response.data)
        }
    }
)

export const highchartsSlice = createSlice({
    name: 'highcharts',
    initialState,
    reducers: {
      setDialogOpen: (state, action) => {
        state.dialogOpen = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getUmap.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getUmap.fulfilled, (state, action) => {
          state.points = action.payload.data
          state.status = 'idle';
        })
    },
  });
  
  export const {setDialogOpen} = highchartsSlice.actions;
  
  export const getDialogOpen = (state) => state.highcharts.dialogOpen
  
  export const getPoints = (state) => state.highcharts.points
  
  export const getStatus = (state) => state.highcharts.status
  
  export default highchartsSlice.reducer;