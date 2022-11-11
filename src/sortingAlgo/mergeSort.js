function getMergeSortAnimations(array){
    const animations = [];
    mergeSortHelper(array , 0 , array.length-1, animations );
    return animations;
}

//optimized version of merge sort
// function mergeSortHelper(array , beg , end, animations , auxiArray){
//     if( beg === end ) return;
//     let mid = Math.floor(beg + (end-beg)/2);
//     mergeSortHelper(auxiArray , beg , mid,animations , array);
//     mergeSortHelper(auxiArray , mid+1 , end, animations , array);
//     doMerge(array , beg , mid , end , animations , auxiArray);
// }

// function doMerge(array , beg , mid , end , animations , auxiArray ){
//     let i = beg , j = mid+1 , k = beg;
//     while( i <= mid && j <= end){
//         animations.push([i,j]);
//         animations.push([i,j]);
//         if(auxiArray[i] <= auxiArray[j]){
//             animations.push([k,auxiArray[i]]);
//             array[k++] = auxiArray[i++];
//         }
//         else {
//             animations.push([k,auxiArray[j]]);
//             array[k++] = auxiArray[j++];
//         }
//     }
//     while(i<=mid){
//         animations.push([i,i]);
//         animations.push([i,i]);
//         animations.push([k,auxiArray[i]]);
//         array[k++] = auxiArray[i++];
//     }
//     while(j<=end){
//         animations.push([j,j]);
//         animations.push([j,j]);
//         animations.push([k,auxiArray[j]]);
//         array[k++] = auxiArray[j++];
//     }
//     auxiArray = array
    
// }


function mergeSortHelper(array , beg , end, animations ){
    if( beg === end ) return;
    let mid = Math.floor(beg + (end-beg)/2);
    mergeSortHelper(array , beg , mid,animations );
    mergeSortHelper(array , mid+1 , end, animations );
    doMerge(array , beg , mid , end , animations );
}

function doMerge(array , beg , mid , end , animations){
    let i = beg , j = mid+1 , k = beg;
    const auxiArray = array.slice();
    while(i <= mid && j <= end){
        animations.push([i,j]);
        animations.push([i,j]);
        if(array[i] > array[j]){
            animations.push([k,array[j]]);
            auxiArray[k++] = array[j++];
        }
        else{
            animations.push([k,array[i]]);
            auxiArray[k++] = array[i++];
        }

    }
    while(i<=mid){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,array[i]]);
        auxiArray[k++] = array[i++];
    }
    while(j<=end){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,array[j]]);
        auxiArray[k++] = array[j++];
    }
    for(let i = beg ; i <= end ; i++){
        array[i] = auxiArray[i];
    }
}



export default getMergeSortAnimations