/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect,useState } from 'react';
import { Document, Folder } from '@carbon/icons-react';
import {TreeView,TreeNode} from "@carbon/react";
import { useRouter } from 'next/navigation'



export default function Tree() {
  const router= useRouter();
  const [nodes,setjsonNode] = useState([]);
  const [routeValue,setrouteValue] = useState([]);
  
  useEffect(()=>{
    fetch('/json/tree.json')
    .then((response)=>response.json())
    .then((data)=> setjsonNode(data));

    fetch('/json/page.json')
    .then((response)=>response.json())
    .then((data)=> setrouteValue(data));
  },[]);
 
  function renderTree({
    nodes,
    expanded,
    withIcons = false
  }) 

  {
    
    const handleClick = (e,value) => {
      let path = routeValue.find(el => el.value === value);
      console.log(path)
     router.push(path["path"])
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    if (!nodes) {
      return;
    }
    return nodes.map(({
      children,
      renderIcon,
      isExpanded,
      ...nodeProps
    }) => <TreeNode key={nodeProps.id} renderIcon={withIcons ? renderIcon : null} isExpanded={expanded ?? isExpanded} {...nodeProps} onSelect={(e)=>handleClick(e,nodeProps.value)} id={nodeProps.id} >
        {renderTree({
        nodes: children,
        expanded,
        withIcons
      })}
      </TreeNode>);
  }
  
  
    return (<div>
      
    <TreeView >{renderTree({
    nodes})}</TreeView>
      </div>)
  }
  