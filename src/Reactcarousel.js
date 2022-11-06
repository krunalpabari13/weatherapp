
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import React from 'react'
import Carousel from 'react-elastic-carousel';
import './App.css'

const breakpoint = [
   {
    // the naming can be any, depends on you.
    width:4000,
    itemsToShow: 2
  },
   {
    width: 3000,
    itemsToShow: 3
  },
   {
    width: 2000,
    itemsToShow: 3  },
   {
    width: 1000,
    itemsToShow: 3 
  }
];


export default function Reactcarousel(props) {
  let time=new Date().getHours();
  return (<>
<Carousel breakPoints={breakpoint}  pagination={
  false} initialActiveIndex={time%12}>
    <Card time={0}temp={props.state} ></Card>
    <Card time={1}temp={props.state}></Card>
    <Card time={2}temp={props.state}></Card>
    <Card time={3}temp={props.state}></Card>
    <Card time={4}temp={props.state}></Card>
    <Card time={5}temp={props.state}></Card>
    <Card time={6}temp={props.state}></Card>
    <Card time={7}temp={props.state}></Card>
    <Card time={8}temp={props.state}></Card>
    <Card time={9}temp={props.state}></Card>
    <Card time={10}temp={props.state}></Card>
    <Card time={11}temp={props.state}></Card>
    <Card time={12}temp={props.state}></Card>
    <Card time={13}temp={props.state}></Card>
    <Card time={14}temp={props.state}></Card>
    <Card time={15}temp={props.state}></Card>
    <Card time={16}temp={props.state}></Card>
    <Card time={17}temp={props.state}></Card>
    <Card time={18}temp={props.state}></Card>
    <Card time={19}temp={props.state}></Card>
    <Card time={20}temp={props.state}></Card>
    <Card time={21}temp={props.state}></Card>
    <Card time={22}temp={props.state}></Card>
    <Card time={23}temp={props.state}></Card>
    
    </Carousel>
    </>
  )
}

