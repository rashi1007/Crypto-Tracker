import { Line } from 'react-chartjs-2';

const Graph = (props) => {
    // const arr = props.yaxis;
    // console.log(arr);
    return ( 
        <div style = {
            {
                width: '600px',
                height: '600px',
                marginLeft: '400px',
                marginTop: '80px',
                marginBottom: '-200px'
            }
        }>
             <Line data = {
                    {
                        labels: props.xaxis,
                        datasets: [
                        {
                            label: `Daily ${props.label} in usd`,
                            data: props.yaxis,
                            fill: true,
                            backgroundColor: 'rgb(16, 124, 156)',
                            borderColor: 'gray',
                        },
                        ],
                    }
                } />
        </div>
     );
}
 
export default Graph;