import { useReducer } from "react"
import {Sub} from '../types'


interface FormState {
    inputValues: Sub
}

type FromReducerAction = {
    type: "change_value",
    payload: {
      inputName: string,
      inputValue: string
    }
  } | {
      type: 'clear'
  }

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
}

const formReducer = (state: FormState["inputValues"], action: FromReducerAction ) => {
    switch(action.type) {
        case 'change_value':
            const {inputName, inputValue} = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
        case 'clear':
            return INITIAL_STATE

    }
}

export const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}
