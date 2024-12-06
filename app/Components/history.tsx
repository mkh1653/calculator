"use client";
import React from "react";
import { RootState } from "../state/store";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { remove } from "../state/reducer";
import { setInput } from "../state/reducer/calculatorReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function History() {
  const dispatch = useAppDispatch();
  const expressions = useAppSelector(
    (state: RootState) => state.expressions.data
  );
  const selectHistory = (expression: string) => {
    dispatch(setInput(expression))
  };
  const removeExpression = (id: string) => {
    dispatch(remove(id));
  };
  return (
    <div
      id='history'
      className='absolute p-3 top-0 min-h-screen md:w-1/4 sm:w-1/3 w-1/2 backdrop-blur-sm z-50 bg-gray-400/20 translate-x-[-100%]'>
      {expressions.length ? (
        expressions.map((expression) => (
          <div
            key={expression.id}
            className='flex items-center rounded-md transition-shadow ease-in-out duration-500 hover:shadow-lg bg-sky-950/10 cursor-pointer mb-4'>
            <button
              type='button'
              className='w-full h-auto px-4 py-3 text-left truncate'
              onClick={() => selectHistory(expression.value)}>
              {expression.value}
            </button>
            <button
              type='button'
              className='w-8 h-8 rounded-full bg-sky-500 mr-3'
              onClick={() => removeExpression(expression.id)}>
              <FontAwesomeIcon
                className='text-white'
                icon={faTrashCan}
                size='sm'
              />
            </button>
          </div>
        ))
      ) : (
        <div className='font-semibold text-md text-center w-full'>
          History is empty
        </div>
      )}
    </div>
  );
}

export default History;
