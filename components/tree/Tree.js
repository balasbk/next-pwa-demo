/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect,useState } from 'react';
import { Document, Folder } from '@carbon/icons-react';
import {TreeView,TreeNode} from "@carbon/react";
import { useRouter } from 'next/navigation'



export default function Tree() {

  const [nodes,setjsonNode] = useState([]);
  
  useEffect(()=>{
    fetch('/json/tree.json')
    .then((response)=>response.json())
    .then((data)=> setjsonNode(data));
  },[]);
 
  function renderTree({
    nodes,
    expanded,
    withIcons = false
  }) 

  {
     const router= useRouter();
    const handleClick = (e) => {
    
     console.log(e)

      router.push('/repos')
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
    }) => <TreeNode key={nodeProps.id} renderIcon={withIcons ? renderIcon : null} isExpanded={expanded ?? isExpanded} {...nodeProps} onSelect={handleClick} id={nodeProps.id} >
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
  