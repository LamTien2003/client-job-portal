import User from '@/types/User';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface InitialValue {
    user: User | null | undefined;
    accessToken: string | null | undefined;
}
const initialState: InitialValue = {
    user: null,
    accessToken: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setcredentialsToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
        setCurrentUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
    // extraReducers: (builder) => {

    // },
});

export const { setcredentialsToken, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
