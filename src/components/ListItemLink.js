import React from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const ListItemLink = (props) => {
  const { icon, primary, to } = props

  const renderLink = React.useMemo(
    // eslint-disable-next-line react/display-name
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  )

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

export default ListItemLink