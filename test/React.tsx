/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2022-08-11T14:08:90+02:00
 * @Copyright: Technology Studio
**/

import { useEffect } from 'react'

// react-hooks/rules-of-hooks
type RulesOfHooksProps = { someProp?: string }
export const RulesOfHooksOk = (props: RulesOfHooksProps): null => {
  useEffect(() => {
    if (props.someProp != null && props.someProp !== '') {
      // localStorage.setItem('formData', name);
    }
  })
  return null
}
