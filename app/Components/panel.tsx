"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faDivide,
  faXmark,
  faPercent,
  faPlus,
  faMinus,
  faEquals,
  fa7,
  fa8,
  fa9,
  fa0,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Resulte from "./resulte";

import Calculator from "./calculateAction";
const calculator = Calculator.getInstance();

const Panel = () => {
  const [result, setResult] = useState<string>(calculator.result);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const ontype = (e: any) => {
      if (e.key === "Backspace") {
        setIsReady(false);
      }
      const text = e.key.match(/^[0-9 \.\=\%\+\/\*\- \(\)]*$/)?.[0];
      const resultLength = result.length;
      if (text) {
        if (text === "." && !resultLength) {
          setResult((prevValue) => prevValue + "0");
        }
        if (text === "=") {
          setIsReady(true);
        }
      }
    };

    document.addEventListener("keydown", ontype);

    return () => {
      document.removeEventListener("keydown", ontype);
    };
  }, [result]);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.length) {
      setResult("");
      calculator.result = "";
    }
    const text = e.target.value.match(
      /^(?!.*[+\-*/%]{2,})(?!.*\.\.)([0-9]+(\.[0-9]*)?|\.[0-9]+|[+\-*/%]|[\(\)])+=?$/
    )?.[0];
    if (text) {
      setResult(text);
      calculator.result = text;
    }
  };

  const onAC = () => {
    calculator.AC();
    setIsReady(false);
    setResult(calculator.result);
  };

  const onDeleteLeft = () => {
    const res = calculator.result.slice(0, calculator.result.length - 1);
    calculator.result = res;
    setResult(calculator.result);
    setIsReady(false);
  };

  const onselect = (char: string) => {
    const newResult = calculator.result + char;
    const resultLength = result.length;

    if (char === "." && !resultLength) {
      setResult("0.");
      calculator.result = "0.";
    }

    if (char === "=") {
      setIsReady(true);
    }

    const text = newResult.match(
      /^(?!.*[+\-*/%]{2,})(?!.*\.\.)([0-9]+(\.[0-9]*)?|\.[0-9]+|[+\-*/%]|[\(\)])+=?$/
    )?.[0];
    if (text) {
      calculator.result = text;
      setResult(text);
    }
  };

  return (
    <>
      <div className='w-full h-1/3 flex flex-col'>
        <Resulte value={result} onchange={onchange} />
        <div className='h-14 text-4xl text-gray-800 pb-4'>
          {isReady && calculator.calculate()}
        </div>
      </div>
      <div className='grid grid-cols-4 gap-5 pt-8 pb-4'>
        {/* firs row */}
        <Button onclick={() => onAC()}>
          <strong>AC</strong>
        </Button>
        <Button onclick={onDeleteLeft}>
          <FontAwesomeIcon icon={faDeleteLeft} size='lg' />
        </Button>
        <Button onclick={() => onselect("%")}>
          <FontAwesomeIcon icon={faPercent} size='lg' />
        </Button>
        <Button onclick={() => onselect("/")}>
          <FontAwesomeIcon icon={faDivide} size='lg' />
        </Button>

        {/* second row */}
        <Button onclick={() => onselect("7")}>
          <FontAwesomeIcon icon={fa7} size='lg' />
        </Button>
        <Button onclick={() => onselect("8")}>
          <FontAwesomeIcon icon={fa8} size='lg' />
        </Button>
        <Button onclick={() => onselect("9")}>
          <FontAwesomeIcon icon={fa9} size='lg' />
        </Button>
        <Button onclick={() => onselect("*")}>
          <FontAwesomeIcon icon={faXmark} size='lg' />
        </Button>

        {/* third row */}
        <Button onclick={() => onselect("6")}>
          <FontAwesomeIcon icon={fa6} size='lg' />
        </Button>
        <Button onclick={() => onselect("5")}>
          <FontAwesomeIcon icon={fa5} size='lg' />
        </Button>
        <Button onclick={() => onselect("4")}>
          <FontAwesomeIcon icon={fa4} size='lg' />
        </Button>
        <Button onclick={() => onselect("+")}>
          <FontAwesomeIcon icon={faPlus} size='lg' />
        </Button>

        {/* fourth row */}
        <Button onclick={() => onselect("3")}>
          <FontAwesomeIcon icon={fa3} size='lg' />
        </Button>
        <Button onclick={() => onselect("2")}>
          <FontAwesomeIcon icon={fa2} size='lg' />
        </Button>
        <Button onclick={() => onselect("1")}>
          <FontAwesomeIcon icon={fa1} size='lg' />
        </Button>
        <Button onclick={() => onselect("-")}>
          <FontAwesomeIcon icon={faMinus} size='lg' />
        </Button>

        {/* fifth row */}
        <Button onclick={() => onselect("0")}>
          <FontAwesomeIcon icon={fa0} size='lg' />
        </Button>
        <Button onclick={() => onselect(".")}>
          <strong className='text-2xl align-super'>.</strong>
        </Button>
        <div className='col-span-2'>
          <Button onclick={() => onselect("=")}>
            <FontAwesomeIcon icon={faEquals} size='lg' />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Panel;
