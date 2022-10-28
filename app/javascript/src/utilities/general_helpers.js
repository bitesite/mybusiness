import queryString from 'query-string';

export const isMobileScreenSize = (width = 760) => window.innerWidth <= width;

export const getQueryParams = () => {
  const searchParams = decodeURIComponent(window.location.search);
  return searchParams.substring(searchParams.indexOf('?') + 1, searchParams.length);
};

export const setQueryParams = (initialsearchParams) => {
  const searchParams = $.param(initialsearchParams);
  const path = searchParams === '' ? window.location.pathname : `${window.location.pathname}?${searchParams}`;
  window.history.replaceState({ url: path }, '', path);
};

export const decodeQueryParams = (params = getQueryParams(), coerce) => {
  const decode = decodeURIComponent;

  const obj = {};
  const coerceTypes = { true: !0, false: !1, null: null };

  $.each(params.replace(/\+/g, ' ').split('&'), (j, v) => {
    const param = v.split('=');
    let key = decode(param[0]);
    let val;
    let cur = obj;
    let i = 0;

    let keys = key.split('][');
    let keysLast = keys.length - 1;

    if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLast])) {
      keys[keysLast] = keys[keysLast].replace(/\]$/, '');
      keys = keys.shift().split('[').concat(keys);

      keysLast = keys.length - 1;
    } else {
      keysLast = 0;
    }

    if (param.length === 2) {
      val = decode(param[1]);

      if (coerce) {
        // eslint-disable-next-line no-nested-ternary
        val =
          val && !Number.isNaN(val)
            ? +val
            : val === 'undefined'
            ? undefined
            : coerceTypes[val] !== undefined
            ? coerceTypes[val]
            : val;
      }

      if (keysLast) {
        for (; i <= keysLast; i += 1) {
          key = keys[i] === '' ? cur.length : keys[i];
          // eslint-disable-next-line no-multi-assign
          cur = cur[key] = i < keysLast ? cur[key] || (keys[i + 1] && Number.isNaN(keys[i + 1]) ? {} : []) : val;
        }
      } else if ($.isArray(obj[key])) {
        obj[key].push(val);
      } else if (obj[key] !== undefined) {
        obj[key] = [obj[key], val];
      } else {
        obj[key] = val;
      }
    } else if (key) {
      obj[key] = coerce ? undefined : '';
    }
  });

  return obj;
};
