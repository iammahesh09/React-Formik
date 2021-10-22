import React from 'react'
import { Route, Switch } from 'react-router-dom';
import BaseFormik from './Components/BaseFormik/BaseFormik';
import BaseFormikRefactored from './Components/BaseFormikRefactored/BaseFormikRefactored';
import FormikComponents from './Components/FormikComponents/FormikComponents';
import FormikRenderProps from './Components/FormikRenderProps/FormikRenderProps';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function MainRouting () {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/base-formik' component={BaseFormik} />
				<Route path='/base-formik-refactored' component={BaseFormikRefactored} />
				<Route path='/formik-render-props' component={FormikRenderProps} />
				<Route path='/formik-components' component={FormikComponents} />
				<Route component={PageNotFound} />
			</Switch>
		</>
	)
}

export default MainRouting;
