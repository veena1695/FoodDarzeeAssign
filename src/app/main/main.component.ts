import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  selectedSlide = 0; 
  selectedSlide2 = 0; 
  imgArr = [
    {img: "../../assets/mediImg1.webp", text: "Personalised Nutrition" },
    {img: "../../assets/mediImg2.webp", text: "Tasty Meals"},
    {img: "../../assets/mediImg3.png", text:"Doorstep Delivery" },
    {img: "../../assets/mediImg4.png", text: "Weekly Health Tracking"}
  ];

  slideArr = [
    { desc: "We are so excited that you've been a part of our journey and glad that we've been able to help you with your fitness journey", title : "Friends we wished for - Alia Bhatt" , url: "https://www.youtube.com/embed/l9SsZrvSKsg" },
    { desc: "Ever wondered how we customise your meals, personalise your food and deliver them to you? Here is an insiders look at how we function.", title : "How It Works at Food Darzee" , url: "https://www.youtube.com/embed/2gkMPqEss9E" },
    { desc: 'We asked 4 people to talk about their relationship with food & health... Here is what they had to say...', title : "4 People, 4 Stories" , url: "https://www.youtube.com/embed/ZWDYtV7OpfI" },
  ];

  slideArr2 = [
    { url: "../../assets/cor1.jpeg" },
    { url: "../../assets/cor2.jpeg" },
    { url: "../../assets/cor3.jpeg" },
    { url: "../../assets/cor4.jpeg" },
  ];

  selectedAcc :any = ''

  accordianArr = [
    {
      id: 'col1',
      ques: 'Why do I need to ‘subscribe’ to a plan? Why can’t I order everyday?',
      ans: "Eating healthy is a habit and that's why our meal plans start with minimum order of 3 days worth of meals to help you follow that habit"
    },
    {
      id: 'col2',
      ques:"Are there initiation fees or cancellation fees or other sneaky stupid fees?",
      ans: "No. And there never will be."
    },
    {
      id: 'col3',
      ques:"Why should I trust you with such an important thing?",
      ans: "With our team of expert chefs and nutritionists, we've helped more than 10000 people achieve their health goal. The Nutritionist guides you daily so that there's complete transparency and trust."
    },
    {
      id: 'col4',
      ques:"How many people have actually lost 10% body weight?",
      ans: "3668 as of today, and counting"
    },
    {
      id: 'col5',
      ques:"Will my weight be maintained? I'm worried I'll gain it all back after the subscription ends",
      ans: "We will be weaning you off the diet which will ensure that you don’t put too much weight back. If you follow our guidelines to the T, you'll not face any problems. The general weight gain due to water retention is 500-750 grams. Don't worry, we are with you even after you have completed your subscription."
    },
    {
      id: 'col6',
      ques:"What if I want to change the number of meals that I take in a day in my ongoing subscription?",
      ans: "We will be adjusting the number of days in your current subscription based on the equivalent amount(₹) of the number of days pending and the rate of the new meal configuration. E.g if you subscribe for 30 days 4 meals a day configuration (Total Cost - ₹28500) and after 15 days decide to just opt for 3 meals. You will have ₹14250(28500x15/30) as a balance. The 3 Meals a Day rate is Rs 833. This means you will get 17 days (Rs 14,166) of 3 Meals as against 15 days of 4 Meals."
    },
    {
      id: 'col7',
      ques:"What is the refund policy?",
      ans: "We will initiate a refund for the remaining number of days. The amount refunded will depend on your subscription plan and the number of days consumed which will be informed to you before confirming the cancellation. The refund will be processed within 10 working days of receiving the account details. E.g If you subscribed for 30 days and all 4 meals for ₹28,500 and consumed only 15 days it will be considered as a 15-day subscription(which costs ₹16150) and we will be refunding ₹12,350."
    }
  ]

  ngOnInit(): void {
  }

  videoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  next(){
    this.selectedSlide = this.selectedSlide === this.slideArr.length - 1 ? 0 : this.selectedSlide + 1 ; 
  }

  prev(){
    this.selectedSlide = this.selectedSlide === 0 ? 2 : this.selectedSlide - 1 ; 
  }

  next2(){
    this.selectedSlide2 = this.selectedSlide2 === this.slideArr2.length - 1 ? 0 : this.selectedSlide2 + 1 ; 
  }

  prev2(){
    this.selectedSlide2 = this.selectedSlide2 === 0 ? 3 : this.selectedSlide2 - 1 ; 
  }

}
