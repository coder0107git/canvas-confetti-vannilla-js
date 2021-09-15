/*
 * Copyright (C) 2020 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/* old code
import React from 'react'
import ReactDOM from 'react-dom'
import Confetti from './Confetti'

export {Confetti}

export default function renderConfettiApp(env, elt) {
  ReactDOM.render(<Confetti />, elt)
}
New Code*/ 
import * as Confetti from '/Confetti.js';

export {Confetti};

export default function renderConfettiApp(env, elt) {
  let env = env;
  if(env === null || env === undefined) {
    env = window.document;
  }
  if(!elt === null || !elt === undefined) {
    var confettiParrent = env.getElementByClassName(elt)[0];
    confettiParrent.appendChild(Confetti);
  } else {
    var confettiParrent = env.getElementByClassName(elt)[0];
    var errorMessage = "Enter a vaild class";
    window.console.error(errorMessage);
    confettiParrent.appendChild("<p style='color: red;'>Warning: " + errorMessage + "</p>");
  }
}
