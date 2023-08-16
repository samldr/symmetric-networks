export default function networkGenerator(iterations:number, repeat: number[], angles: number[], len:[]):number[][]{

    let x: number = 0, y: number = 0, theta: number = 0;
    let output: number[][] = [];

    // for (let i = 0; i < iterations; i++) {
    //     for (let j = 0; j < repeat.length; j++) {
    //         for (let k = 0; k < repeat[j]; k++) {
    //             theta += angles[j];
    //             theta = theta >= 360 ? theta - 360 : theta;
    //             x += len[k] * Math.sin(theta * Math.PI / 180);
    //             y += len[k] * Math.cos(theta * Math.PI / 180);

    //             output.push([x, y]);
    //         }
    //     }
    // }

    for (let i = 0; i < iterations; i++) {
        for (let j = 0; j < repeat.length; j++) {
            for (let k = 0; k < angles.length; k++) {
                for (let l = 0; l < repeat[j]; l++){
                    theta += angles[j];
                    theta = theta >= 360 ? theta - 360 : theta;
                    x += len[k] * Math.sin(theta * Math.PI / 180);
                    y += len[k] * Math.cos(theta * Math.PI / 180);

                    output.push([x, y]);
                }
            }
        }
    }
    return output
}

// my MATLAB code of this algorithm:
// 
//% input configuration
// iterations = 8;
// repeat = [1 1 1 1];
// angles = [15 45 60 45 15];
// len =    [12 1 4 1 12];

// x = 0;
// y = 0;
// l = 0;
// theta = 0;

// % algorithm
// for j = 1:iterations
//     for i = 1:length(repeat)
//         for ii = 1:length(angles)
//             for iii = 1:repeat(i)
//                 l = l + 1;
//                 theta = theta + angles(i);
    
//                 if theta >= 360
//                     theta = theta - 360;
//                 end
    
//                 x = len(ii)*sind(theta)+x;
//                 y = len(ii)*cosd(theta)+y;
                
//                 x_coord(l) = x;
//                 y_coord(l) = y;
    
//             end
//         end
//     end
// end

// % plot
// plot(x_coord,y_coord, Color=[0 0 0],LineWidth=1)
// set(gca,'visible','off')