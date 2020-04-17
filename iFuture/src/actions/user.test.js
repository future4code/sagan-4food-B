import axios from 'axios'
import { baseUrl, getToken } from '../utils/constants'
import {
    addAdress,
    getFullAdress,
    getProfile,
    login,
    setFullAddress,
    setProfile,
    signup,
    updateProfile
} from './user'

describe('User actions', () => {

    describe('Actions creators', () => {

        const mockTest = "test"

        it('setProfile', () => {
            const mockedAction = setProfile(mockTest)

            expect(mockedAction.type).toEqual("SET_PROFILE")
            expect(mockedAction.payload.info).toBeDefined()
            expect(mockedAction.payload.info).toEqual(mockTest)

        })

        it('setFullAddress', () => {
            const mockedAction = setFullAddress(mockTest)

            expect(mockedAction.type).toEqual("SET_FULL_ADDRESS")
            expect(mockedAction.payload.fullAddress).toBeDefined()
            expect(mockedAction.payload.fullAddress).toEqual(mockTest)
        })

    })

    describe('Async actions', () => {

        let mockDispatch
        let mockTest
        beforeEach(() => {
            mockDispatch = jest.fn()
            mockTest = "test"
        });


        it('addAdress', async () => {

            axios.put = jest.fn(() => ({ data: mockTest }))

            const response = axios.put() // aqui ela é síncrona = responde instantaneamente
            console.log(response.data)

            await addAdress()(mockDispatch)

            // expect(mockDispatch).toHaveBeenCalled()

            // expect(mockDispatch).toHaveBeenCalledWith({
            //     type: "SET_TASKS",
            //     payload: {
            //         tasks: mockDataTaskCreated
            //     }
            // })

        })


        it('getFullAdress', async () => {

            axios.get = jest.fn(() => ({ data: mockTest }))

            await getFullAdress()(mockDispatch)

            expect(mockDispatch).toHaveBeenCalled()

            // expect(mockDispatch).toHaveBeenCalledWith({
            //     type: "SET_FULL_ADDRESS",
            //     payload: {
            //         fullAddress: mockTest
            //     }
            // })
        })


        it('getProfile', async () => {

            axios.get = jest.fn(() => ({ data: mockTest }))

            await getProfile()(mockDispatch)

            expect(mockDispatch).toHaveBeenCalled()

            // expect(mockDispatch).toHaveBeenCalledWith({
            //     type: "SET_PROFILE",
            //     payload: {
            //         info: mockTest
            //     }
            // })

        })


        it('login', async () => {

            // axios.post = jest.fn()

            // await login(mockTest)(mockDispatch)

            // expect(mockDispatch).toHaveBeenCalled()


        })


        it('signup', async () => {

            // axios.post = jest.fn()

            // await signup(mockTest)(mockDispatch)

        })


        // it('updateProfile', async () => {

        // })

    })

})