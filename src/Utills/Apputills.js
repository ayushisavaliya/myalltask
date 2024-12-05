export const returnPaginationRange=(totalPage,page,limit,siblings)=>{

    let totalPageNoInArray=7+siblings;
    if(totalPageNoInArray>=totalPage){
        return _.range(1,totalPage + 1);
    }
    let leftSiblingsIndex = Math.max(page - siblings, 1);
    let righttSiblingsIndex = Math.min(page + siblings, totalPage);

    let showLeftDots = leftSiblingIndex>2;
    let showRightDots = RightSiblingIndex < totalPAge - 2;

    if(!showLeftDots && showRightDots){
        let leftItemsCount =3+2*siblings;
        let leftRange=_.range(1,leftItemsCount +1);
        return [...leftRange,"...",totalPage];
    }
    else if(showLeftDots && !showRightDots){
        let righttItemsCount =3+2*siblings;
        let rightRange=_.range(totalPage - rightItemsCount +1,totalPge +1);
        return [1,"...",...rightRange];
    }

    else{
         let middleRange = _.range(leftSiblingsIndex,rightSiblingsIndex + 1 );
         return [1,"...",...middleRange,"...",totalPage];
    }

}