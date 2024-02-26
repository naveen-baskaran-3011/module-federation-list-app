import React from 'react';
import styles from './App.module.scss';

export default function App() {
    return (
        <div className=''>
            <table className={styles['table-container']}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Naveen</td>
                        <td>Frontend Developer</td>
                    </tr>
                    <tr>
                        <td>Baskaran</td>
                        <td>Alumium Fabrication</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}