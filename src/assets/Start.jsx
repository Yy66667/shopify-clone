export function StartLogo(){
    return(
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradientStroke"  x1="30%" y1="30%" x2="80%" y2="70%">
                <stop offset="0%" stop-color="#00c184"/>  
                <stop offset="100%" stop-color="#00b9c7"/>
            </linearGradient>
        </defs>
        <g clip-path="url(#clipCircle)">
            <path d="M19 21.5v-3h-2.5v1a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1h6.75s4.25 0 4.25 4.5c0 0-2.25-1-5-1v3m-3.5 0h3.5m-3.5 0v6m3.5-6v6M39.25 20c0 10.631-8.619 19.25-19.25 19.25S.75 30.631.75 20 9.369.75 20 .75 39.25 9.369 39.25 20Z" 
                stroke="url(#gradientStroke)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </svg>

    )
}
