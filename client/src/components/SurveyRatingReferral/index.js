import React  from 'react';
import { Field } from 'redux-form'
import { Select, MenuItem } from 'material-ui';

const ratings = [{ value: null, key: 0 },{ value: '10', key: 10 }, { value: '9', key: 9 }, { value: '8', key: 8 }, { value: '7', key: 7 }, { value: '6', key: 6 }, { value: '5', key: 5 }, { value: '4', key: 4 }, { value: '3', key: 3 }, { value: '2', key: 2 }, { value: '1', key: 1 }]

const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children
  }) => (
    <Select
        style={{display:'block', width:'80%', paddingTop: 14, fontSize:14}}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
    />
  )

const RatingReferral = props => (
    <Field
        name="rating_referral"
        component={renderSelectField}
        label="Please Select an Option"
    >
        {ratings.map((rating) =>
            <MenuItem value={rating.value} key={rating.key}
                style={{ borderLeft: '2px solid #38a9e3', fontSize: 16 }}
                onMouseLeave={(e) => e.target.style.color = '#4D4D4D'}
                onMouseEnter={(e) => e.target.style.color = '#0e30ad'}
                primaryText={rating.value}
            />
        )}
    </Field>
)

export default (RatingReferral);
