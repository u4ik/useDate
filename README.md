<div align="center">

# 📅

# useDate()

![npm version](https://img.shields.io/npm/v/usedate.svg?style=flat)
![npm downloads](https://img.shields.io/npm/dt/usedate.svg?style=flat)
![npm license](https://img.shields.io/npm/l/usedate.svg?style=flat)

</div>

---

## Install

```sh
npm i usedate
```

## Usage

```js
import useDate from "usedate";
```

### OR

```js
const useDate = require("usedate");
```

---

## Formats & Examples

### `useDate("mn dd yyyy")`
**Output:** `Jun 02 2021`

---

### `useDate("mn/dd/yyyy")`
**Output:** `Jun/02/2021`

---

### `useDate("mn-dd-yyyy")`
**Output:** `Jun-02-2021`

---

### `useDate("mm/dd/yyyy")`
**Output:** `06/02/2021`

---

### `useDate("m/dd/yyyy")`
**Output:** `6/02/2021`

---

### `useDate("m/d/yyyy")`
**Output:** `6/2/2021`

---

### `useDate("m/d/yy")`
**Output:** `6/2/21`

---

### `useDate("mn-dn-yyyy")`
**Output:** `Jun-Wednesday-2021`

---

### `useDate("mn/dd/yy")`
**Output:** `Jun/02/21`

---

### `useDate("dn, mn dd yyyy")`
**Output:** `Wednesday, Jun 02 2021`

---

### `useDate("dn, m/d/yy")`
**Output:** `Wednesday, 6/2/21`

---

### `useDate("yyyy-mm-dd")`
**Output:** `2021-06-02`

---

### `useDate("yy/mm/dd")`
**Output:** `21/06/02`

---

### `useDate("fmn dd yyyy")`
**Output:** `June 02 2021`

---

### `useDate("fmn, fdn do yyyy")`
**Output:** `Wednesday, June 2nd 2021`

---

### `useDate("fdn, fmn dd yyyy")`
**Output:** `Wednesday, June 02 2021`

---

### `useDate("fdn, fmn do yyyy")`
**Output:** `Wednesday, June 2nd 2021`

---

### `useDate("fdn, m/d/yyyy")`
**Output:** `Wednesday, 6/2/2021`

---

### `useDate("fdn, fmn dd, yyyy")`
**Output:** `Wednesday, June 02, 2021`

---

### Default (`useDate()`)
**Output:** `6/2/2021`

---

### Invalid Input (`useDate(123)`)
**Output:** `Error: "Invalid Format"`