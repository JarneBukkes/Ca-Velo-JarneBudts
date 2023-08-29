import styles from '@/styles/Home.module.css'
import {useState} from 'react';
import useNetwork from '@/data/network';
import Link from 'next/link';
import Profile from '@/components/Profile';

export default function Home() {

    const textstyle = {
        font: 'verdana',
        color: '#e82127',
        padding: '20px',
        textAlign: 'center',
      };
    return(
    <div>
    <h1 style= {textstyle}>Gemaakt door Jarne Budts</h1>
    <Profile/>
    </div>
    )
}