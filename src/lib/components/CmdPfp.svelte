<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="relative overflow-hidden"
    onclick={(e) => {
        const node = e.currentTarget;
        node.classList.remove('animate-highlight');
        requestAnimationFrame(() => {
            node.classList.add('animate-highlight');
        });
    }}
>
    <pre
        style="font-size: 8px; line-height: 1.2; transform: scale(1); transform-origin: left top; white-space: pre; font-family: monospace;">
<span style="color: rgb(231, 206, 173); ">#</span><span style="color: rgb(231, 205, 173); ">#</span
        ><span style="color: rgb(230, 205, 172); ">#</span><span style="color: rgb(231, 206, 173); "
            >#</span
        ><span style="color: rgb(230, 206, 173); ">#</span><span style="color: rgb(230, 205, 173); "
            >#</span
        ><span style="color: rgb(230, 205, 173); ">#</span><span style="color: rgb(230, 205, 173); "
            >#</span
        ><span style="color: rgb(230, 205, 172); ">#</span><span style="color: rgb(230, 205, 173); "
            >#</span
        ><span style="color: rgb(230, 205, 172); ">#</span><span style="color: rgb(230, 205, 174); "
            >#</span
        ><span style="color: rgb(229, 204, 171); ">#</span><span style="color: rgb(230, 204, 171); "
            >#</span
        ><span style="color: rgb(228, 203, 171); ">#</span><span style="color: rgb(229, 205, 173); "
            >#</span
        ><span style="color: rgb(230, 205, 174); ">#</span><span style="color: rgb(149, 142, 122); "
            >+</span
        ><span style="color: rgb(142, 136, 115); ">=</span><span style="color: rgb(140, 135, 114); "
            >=</span
        ><span style="color: rgb(139, 134, 113); ">=</span><span style="color: rgb(139, 133, 113); "
            >=</span
        ><span style="color: rgb(137, 132, 114); ">=</span><span style="color: rgb(135, 131, 112); "
            >=</span
        ><span style="color: rgb(136, 131, 112); ">=</span><span style="color: rgb(136, 131, 112); "
            >=</span
        ><span style="color: rgb(134, 130, 109); ">=</span><span style="color: rgb(134, 129, 112); "
            >=</span
        ><span style="color: rgb(132, 129, 112); ">=</span><span style="color: rgb(133, 130, 113); "
            >=</span
        ><span style="color: rgb(132, 128, 110); ">=</span><span style="color: rgb(131, 127, 111); "
            >=</span
        ><span style="color: rgb(131, 127, 108); ">=</span><span style="color: rgb(131, 128, 111); "
            >=</span
        ><span style="color: rgb(131, 128, 111); ">=</span><span style="color: rgb(130, 127, 109); "
            >=</span
        ><span style="color: rgb(129, 127, 112); ">=</span><span style="color: rgb(130, 126, 109); "
            >=</span
        ><span style="color: rgb(129, 126, 109); ">=</span><span style="color: rgb(129, 126, 110); "
            >=</span
        ><span style="color: rgb(128, 126, 109); ">=</span><span style="color: rgb(128, 124, 108); "
            >=</span
        ><span style="color: rgb(128, 126, 109); ">=</span><span style="color: rgb(127, 125, 109); "
            >=</span
        ><span style="color: rgb(128, 125, 111); ">=</span><span style="color: rgb(127, 124, 107); "
            >=</span
        ><span style="color: rgb(127, 124, 106); ">=</span><span style="color: rgb(126, 124, 108); "
            >=</span
        ><span style="color: rgb(127, 123, 105); ">=</span><span style="color: rgb(126, 123, 106); "
            >=</span
        ><span style="color: rgb(126, 123, 107); ">=</span><span style="color: rgb(125, 121, 104); "
            >=</span
        ><span style="color: rgb(125, 122, 106); ">=</span><span style="color: rgb(124, 122, 107); "
            >=</span
        ><span style="color: rgb(124, 122, 106); ">=</span><span style="color: rgb(119, 116, 99); "
            >=</span
        ><span style="color: rgb(104, 110, 102); ">-</span><span style="color: rgb(100, 108, 101); "
            >-</span
        ><span style="color: rgb(100, 107, 99); ">-</span><span style="color: rgb(101, 109, 102); "
            >-</span
        ><span style="color: rgb(102, 108, 101); ">-</span><span style="color: rgb(102, 109, 101); "
            >-</span
        ><span style="color: rgb(102, 110, 103); ">-</span><span style="color: rgb(103, 111, 104); "
            >-</span
        ><span style="color: rgb(103, 111, 103); ">-</span><span style="color: rgb(103, 111, 102); "
            >-</span
        ><span style="color: rgb(103, 112, 104); ">-</span><span style="color: rgb(103, 111, 105); "
            >-</span
        ><span style="color: rgb(103, 110, 103); ">-</span><span style="color: rgb(102, 111, 104); "
            >-</span
        ><span style="color: rgb(104, 111, 103); ">-</span><span style="color: rgb(104, 111, 102); "
            >-</span
        ><span style="color: rgb(103, 111, 103); ">-</span><span style="color: rgb(103, 111, 104); "
            >-</span
        ><span style="color: rgb(104, 111, 102); ">-</span><span style="color: rgb(103, 111, 103); "
            >-</span
        ><span style="color: rgb(105, 112, 104); ">-</span><span style="color: rgb(104, 110, 103); "
            >-</span
        ><span style="color: rgb(104, 110, 102); ">-</span><span style="color: rgb(105, 112, 104); "
            >-</span
        >
<span style="color: rgb(230, 205, 172); ">#</span><span style="color: rgb(230, 204, 171); ">#</span
        ><span style="color: rgb(230, 205, 173); ">#</span><span style="color: rgb(230, 205, 172); "
            >#</span
        ><span style="color: rgb(230, 205, 172); ">#</span><span style="color: rgb(230, 204, 171); "
            >#</span
        ><span style="color: rgb(229, 204, 170); ">#</span><span style="color: rgb(229, 203, 170); "
            >#</span
        ><span style="color: rgb(229, 203, 170); ">#</span><span style="color: rgb(229, 204, 171); "
            >#</span
        ><span style="color: rgb(229, 204, 172); ">#</span><span style="color: rgb(228, 202, 170); "
            >#</span
        ><span style="color: rgb(229, 204, 171); ">#</span><span style="color: rgb(229, 203, 170); "
            >#</span
        ><span style="color: rgb(229, 204, 171); ">#</span><span style="color: rgb(228, 203, 171); "
            >#</span
        ><span style="color: rgb(232, 206, 174); ">#</span><span style="color: rgb(148, 141, 121); "
            >=</span
        ><span style="color: rgb(142, 137, 116); ">=</span><span style="color: rgb(140, 134, 114); "
            >=</span
        ><span style="color: rgb(138, 133, 114); ">=</span><span style="color: rgb(138, 133, 114); "
            >=</span
        ><span style="color: rgb(137, 132, 113); ">=</span><span style="color: rgb(136, 132, 114); "
            >=</span
        ><span style="color: rgb(135, 131, 112); ">=</span><span style="color: rgb(133, 130, 112); "
            >=</span
        ><span style="color: rgb(133, 131, 113); ">=</span><span style="color: rgb(134, 129, 111); "
            >=</span
        ><span style="color: rgb(133, 129, 111); ">=</span><span style="color: rgb(131, 129, 111); "
            >=</span
        ><span style="color: rgb(132, 129, 113); ">=</span><span style="color: rgb(132, 129, 112); "
            >=</span
        ><span style="color: rgb(131, 128, 111); ">=</span><span style="color: rgb(131, 126, 108); "
            >=</span
        ><span style="color: rgb(132, 128, 110); ">=</span><span style="color: rgb(131, 126, 109); "
            >=</span
        ><span style="color: rgb(131, 127, 108); ">=</span><span style="color: rgb(131, 127, 109); "
            >=</span
        ><span style="color: rgb(130, 127, 109); ">=</span><span style="color: rgb(129, 126, 109); "
            >=</span
        ><span style="color: rgb(128, 125, 107); ">=</span><span style="color: rgb(128, 125, 107); "
            >=</span
        ><span style="color: rgb(127, 125, 109); ">=</span><span style="color: rgb(127, 123, 107); "
            >=</span
        ><span style="color: rgb(126, 124, 108); ">=</span><span style="color: rgb(127, 124, 107); "
            >=</span
        ><span style="color: rgb(127, 123, 105); ">=</span><span style="color: rgb(126, 122, 105); "
            >=</span
        ><span style="color: rgb(126, 122, 106); ">=</span><span style="color: rgb(125, 123, 108); "
            >=</span
        ><span style="color: rgb(126, 123, 106); ">=</span><span style="color: rgb(125, 121, 105); "
            >=</span
        ><span style="color: rgb(124, 121, 104); ">=</span><span style="color: rgb(124, 121, 104); "
            >=</span
        ><span style="color: rgb(123, 120, 104); ">=</span><span style="color: rgb(122, 119, 102); "
            >=</span
        ><span style="color: rgb(122, 118, 100); ">=</span><span style="color: rgb(121, 118, 101); "
            >=</span
        ><span style="color: rgb(95, 96, 85); ">-</span><span style="color: rgb(99, 105, 98); "
            >-</span
        ><span style="color: rgb(99, 107, 101); ">-</span><span style="color: rgb(102, 108, 101); "
            >-</span
        ><span style="color: rgb(100, 108, 101); ">-</span><span style="color: rgb(101, 109, 103); "
            >-</span
        ><span style="color: rgb(100, 108, 101); ">-</span><span style="color: rgb(101, 109, 102); "
            >-</span
        ><span style="color: rgb(102, 109, 103); ">-</span><span style="color: rgb(102, 109, 103); "
            >-</span
        ><span style="color: rgb(101, 110, 102); ">-</span><span style="color: rgb(101, 110, 103); "
            >-</span
        ><span style="color: rgb(101, 109, 103); ">-</span><span style="color: rgb(102, 110, 105); "
            >-</span
        ><span style="color: rgb(101, 109, 103); ">-</span><span style="color: rgb(102, 110, 104); "
            >-</span
        ><span style="color: rgb(102, 110, 103); ">-</span><span style="color: rgb(102, 110, 102); "
            >-</span
        ><span style="color: rgb(102, 109, 103); ">-</span><span style="color: rgb(102, 110, 102); "
            >-</span
        ><span style="color: rgb(104, 110, 102); ">-</span><span style="color: rgb(104, 110, 102); "
            >-</span
        >
<span style="color: rgb(229, 204, 171); ">#</span><span style="color: rgb(230, 205, 172); ">#</span
        ><span style="color: rgb(229, 204, 171); ">#</span><span style="color: rgb(230, 205, 172); "
            >#</span
        ><span style="color: rgb(229, 204, 169); ">#</span><span style="color: rgb(229, 204, 170); "
            >#</span
        ><span style="color: rgb(229, 204, 170); ">#</span><span style="color: rgb(229, 203, 169); "
            >#</span
        ><span style="color: rgb(228, 203, 169); ">#</span><span style="color: rgb(228, 203, 169); "
            >#</span
        ><span style="color: rgb(228, 203, 169); ">#</span><span style="color: rgb(228, 202, 168); "
            >#</span
        ><span style="color: rgb(228, 203, 170); ">#</span><span style="color: rgb(229, 203, 170); "
            >#</span
        ><span style="color: rgb(228, 203, 170); ">#</span><span style="color: rgb(228, 202, 169); "
            >#</span
        ><span style="color: rgb(231, 206, 173); ">#</span><span style="color: rgb(146, 140, 119); "
            >=</span
        ><span style="color: rgb(142, 135, 116); ">=</span><span style="color: rgb(140, 134, 114); "
            >=</span
        ><span style="color: rgb(139, 133, 112); ">=</span><span style="color: rgb(138, 133, 115); "
            >=</span
        ><span style="color: rgb(137, 132, 112); ">=</span><span style="color: rgb(136, 132, 114); "
            >=</span
        ><span style="color: rgb(135, 131, 112); ">=</span><span style="color: rgb(135, 131, 113); "
            >=</span
        ><span style="color: rgb(134, 129, 112); ">=</span><span style="color: rgb(132, 129, 111); "
            >=</span
        ><span style="color: rgb(133, 130, 112); ">=</span><span style="color: rgb(132, 128, 111); "
            >=</span
        ><span style="color: rgb(132, 129, 112); ">=</span><span style="color: rgb(133, 129, 112); "
            >=</span
        ><span style="color: rgb(133, 129, 111); ">=</span><span style="color: rgb(131, 128, 113); "
            >=</span
        ><span style="color: rgb(131, 127, 109); ">=</span><span style="color: rgb(120, 115, 97); "
            >=</span
        ><span style="color: rgb(127, 124, 106); ">=</span><span style="color: rgb(130, 126, 108); "
            >=</span
        ><span style="color: rgb(130, 125, 106); ">=</span><span style="color: rgb(131, 126, 106); "
            >=</span
        ><span style="color: rgb(133, 128, 109); ">=</span><span style="color: rgb(131, 127, 109); "
            >=</span
        ><span style="color: rgb(130, 126, 108); ">=</span><span style="color: rgb(128, 124, 106); "
            >=</span
        ><span style="color: rgb(127, 122, 105); ">=</span><span style="color: rgb(127, 123, 105); "
            >=</span
        ><span style="color: rgb(127, 122, 103); ">=</span><span style="color: rgb(124, 120, 102); "
            >=</span
        ><span style="color: rgb(87, 81, 69); ">:</span><span style="color: rgb(103, 98, 83); "
            >-</span
        ><span style="color: rgb(125, 121, 104); ">=</span><span style="color: rgb(126, 121, 104); "
            >=</span
        ><span style="color: rgb(123, 120, 103); ">=</span><span style="color: rgb(123, 119, 102); "
            >=</span
        ><span style="color: rgb(123, 119, 101); ">=</span><span style="color: rgb(123, 120, 103); "
            >=</span
        ><span style="color: rgb(123, 121, 105); ">=</span><span style="color: rgb(122, 118, 101); "
            >=</span
        ><span style="color: rgb(120, 118, 101); ">=</span><span style="color: rgb(120, 118, 102); "
            >=</span
        ><span style="color: rgb(112, 111, 96); ">-</span><span style="color: rgb(89, 94, 86); "
            >-</span
        ><span style="color: rgb(99, 107, 100); ">-</span><span style="color: rgb(100, 109, 101); "
            >-</span
        ><span style="color: rgb(100, 108, 102); ">-</span><span style="color: rgb(101, 108, 101); "
            >-</span
        ><span style="color: rgb(100, 109, 103); ">-</span><span style="color: rgb(100, 108, 102); "
            >-</span
        ><span style="color: rgb(100, 108, 101); ">-</span><span style="color: rgb(100, 108, 101); "
            >-</span
        ><span style="color: rgb(100, 108, 101); ">-</span><span style="color: rgb(99, 107, 101); "
            >-</span
        ><span style="color: rgb(101, 108, 103); ">-</span><span style="color: rgb(100, 108, 103); "
            >-</span
        ><span style="color: rgb(100, 108, 102); ">-</span><span style="color: rgb(100, 109, 104); "
            >-</span
        ><span style="color: rgb(101, 108, 102); ">-</span><span style="color: rgb(100, 108, 101); "
            >-</span
        ><span style="color: rgb(101, 109, 103); ">-</span><span style="color: rgb(102, 110, 102); "
            >-</span
        >
<span style="color: rgb(230, 205, 171); ">#</span><span style="color: rgb(229, 203, 169); ">#</span
        ><span style="color: rgb(229, 203, 169); ">#</span><span style="color: rgb(230, 205, 171); "
            >#</span
        ><span style="color: rgb(229, 203, 169); ">#</span><span style="color: rgb(229, 203, 169); "
            >#</span
        ><span style="color: rgb(228, 203, 168); ">#</span><span style="color: rgb(228, 203, 169); "
            >#</span
        ><span style="color: rgb(229, 204, 169); ">#</span><span style="color: rgb(229, 203, 168); "
            >#</span
        ><span style="color: rgb(228, 203, 169); ">#</span><span style="color: rgb(229, 203, 170); "
            >#</span
        ><span style="color: rgb(228, 203, 168); ">#</span><span style="color: rgb(228, 203, 168); "
            >#</span
        ><span style="color: rgb(228, 202, 168); ">#</span><span style="color: rgb(228, 202, 168); "
            >#</span
        ><span style="color: rgb(232, 206, 173); ">#</span><span style="color: rgb(146, 139, 120); "
            >=</span
        ><span style="color: rgb(140, 135, 114); ">=</span><span style="color: rgb(140, 134, 113); "
            >=</span
        ><span style="color: rgb(139, 133, 113); ">=</span><span style="color: rgb(138, 133, 116); "
            >=</span
        ><span style="color: rgb(137, 131, 113); ">=</span><span style="color: rgb(135, 131, 113); "
            >=</span
        ><span style="color: rgb(135, 130, 111); ">=</span><span style="color: rgb(135, 130, 112); "
            >=</span
        ><span style="color: rgb(134, 130, 113); ">=</span><span style="color: rgb(134, 130, 112); "
            >=</span
        ><span style="color: rgb(133, 129, 112); ">=</span><span style="color: rgb(132, 128, 110); "
            >=</span
        ><span style="color: rgb(132, 127, 109); ">=</span><span style="color: rgb(130, 125, 108); "
            >=</span
        ><span style="color: rgb(123, 118, 101); ">=</span><span style="color: rgb(77, 71, 59); "
            >:</span
        ><span style="color: rgb(77, 73, 65); ">:</span><span style="color: rgb(78, 74, 65); "
            >:</span
        ><span style="color: rgb(66, 62, 55); ">:</span><span style="color: rgb(54, 48, 43); "
            >.</span
        ><span style="color: rgb(48, 42, 38); ">.</span><span style="color: rgb(52, 47, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 48, 43); "
            >.</span
        ><span style="color: rgb(52, 47, 41); ">.</span><span style="color: rgb(52, 47, 42); "
            >.</span
        ><span style="color: rgb(51, 46, 41); ">.</span><span style="color: rgb(51, 47, 42); "
            >.</span
        ><span style="color: rgb(51, 46, 41); ">.</span><span style="color: rgb(64, 60, 52); "
            >:</span
        ><span style="color: rgb(83, 76, 65); ">:</span><span style="color: rgb(71, 65, 55); "
            >:</span
        ><span style="color: rgb(56, 52, 45); ">.</span><span style="color: rgb(119, 114, 96); "
            >-</span
        ><span style="color: rgb(124, 119, 101); ">=</span><span style="color: rgb(123, 119, 101); "
            >=</span
        ><span style="color: rgb(123, 119, 102); ">=</span><span style="color: rgb(122, 118, 100); "
            >=</span
        ><span style="color: rgb(122, 118, 101); ">=</span><span style="color: rgb(121, 119, 101); "
            >=</span
        ><span style="color: rgb(120, 117, 99); ">=</span><span style="color: rgb(119, 117, 100); "
            >=</span
        ><span style="color: rgb(119, 117, 102); ">=</span><span style="color: rgb(116, 115, 101); "
            >=</span
        ><span style="color: rgb(113, 112, 98); ">-</span><span style="color: rgb(107, 109, 97); "
            >-</span
        ><span style="color: rgb(97, 104, 98); ">-</span><span style="color: rgb(97, 105, 99); "
            >-</span
        ><span style="color: rgb(96, 105, 99); ">-</span><span style="color: rgb(97, 106, 100); "
            >-</span
        ><span style="color: rgb(99, 107, 102); ">-</span><span style="color: rgb(98, 106, 98); "
            >-</span
        ><span style="color: rgb(98, 107, 100); ">-</span><span style="color: rgb(98, 106, 101); "
            >-</span
        ><span style="color: rgb(99, 106, 100); ">-</span><span style="color: rgb(98, 106, 101); "
            >-</span
        ><span style="color: rgb(99, 107, 100); ">-</span><span style="color: rgb(100, 107, 100); "
            >-</span
        ><span style="color: rgb(99, 107, 100); ">-</span><span style="color: rgb(98, 107, 99); "
            >-</span
        ><span style="color: rgb(99, 108, 102); ">-</span><span style="color: rgb(101, 107, 100); "
            >-</span
        >
<span style="color: rgb(229, 203, 169); ">#</span><span style="color: rgb(229, 203, 170); ">#</span
        ><span style="color: rgb(229, 203, 167); ">#</span><span style="color: rgb(229, 203, 169); "
            >#</span
        ><span style="color: rgb(228, 202, 167); ">#</span><span style="color: rgb(228, 202, 167); "
            >#</span
        ><span style="color: rgb(228, 202, 168); ">#</span><span style="color: rgb(228, 202, 168); "
            >#</span
        ><span style="color: rgb(228, 203, 168); ">#</span><span style="color: rgb(228, 202, 168); "
            >#</span
        ><span style="color: rgb(228, 202, 168); ">#</span><span style="color: rgb(227, 202, 169); "
            >#</span
        ><span style="color: rgb(228, 201, 167); ">#</span><span style="color: rgb(228, 202, 168); "
            >#</span
        ><span style="color: rgb(228, 202, 167); ">#</span><span style="color: rgb(228, 202, 169); "
            >#</span
        ><span style="color: rgb(232, 205, 171); ">#</span><span style="color: rgb(146, 138, 118); "
            >=</span
        ><span style="color: rgb(141, 135, 115); ">=</span><span style="color: rgb(140, 133, 112); "
            >=</span
        ><span style="color: rgb(139, 133, 114); ">=</span><span style="color: rgb(137, 131, 112); "
            >=</span
        ><span style="color: rgb(136, 132, 113); ">=</span><span style="color: rgb(136, 132, 114); "
            >=</span
        ><span style="color: rgb(136, 131, 112); ">=</span><span style="color: rgb(135, 130, 112); "
            >=</span
        ><span style="color: rgb(135, 129, 110); ">=</span><span style="color: rgb(124, 117, 99); "
            >=</span
        ><span style="color: rgb(55, 51, 44); ">.</span><span style="color: rgb(55, 49, 44); "
            >.</span
        ><span style="color: rgb(53, 49, 43); ">.</span><span style="color: rgb(53, 50, 44); "
            >.</span
        ><span style="color: rgb(53, 48, 43); ">.</span><span style="color: rgb(54, 49, 43); "
            >.</span
        ><span style="color: rgb(53, 48, 43); ">.</span><span style="color: rgb(52, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 43); ">.</span><span style="color: rgb(52, 48, 42); "
            >.</span
        ><span style="color: rgb(52, 48, 42); ">.</span><span style="color: rgb(52, 48, 43); "
            >.</span
        ><span style="color: rgb(52, 47, 42); ">.</span><span style="color: rgb(52, 48, 43); "
            >.</span
        ><span style="color: rgb(51, 48, 42); ">.</span><span style="color: rgb(51, 48, 43); "
            >.</span
        ><span style="color: rgb(52, 47, 42); ">.</span><span style="color: rgb(51, 46, 41); "
            >.</span
        ><span style="color: rgb(51, 47, 40); ">.</span><span style="color: rgb(51, 47, 42); "
            >.</span
        ><span style="color: rgb(52, 47, 41); ">.</span><span style="color: rgb(51, 46, 40); "
            >.</span
        ><span style="color: rgb(52, 48, 42); ">.</span><span style="color: rgb(52, 47, 41); "
            >.</span
        ><span style="color: rgb(60, 55, 47); ">.</span><span style="color: rgb(60, 55, 46); "
            >.</span
        ><span style="color: rgb(60, 54, 46); ">.</span><span style="color: rgb(60, 55, 47); "
            >.</span
        ><span style="color: rgb(60, 54, 45); ">.</span><span style="color: rgb(97, 93, 79); "
            >-</span
        ><span style="color: rgb(118, 117, 99); ">=</span><span style="color: rgb(116, 115, 99); "
            >-</span
        ><span style="color: rgb(117, 115, 100); ">=</span><span style="color: rgb(115, 114, 99); "
            >-</span
        ><span style="color: rgb(113, 113, 99); ">-</span><span style="color: rgb(109, 110, 98); "
            >-</span
        ><span style="color: rgb(108, 112, 100); ">-</span><span style="color: rgb(99, 103, 94); "
            >-</span
        ><span style="color: rgb(96, 104, 97); ">-</span><span style="color: rgb(96, 103, 97); "
            >-</span
        ><span style="color: rgb(95, 103, 98); ">-</span><span style="color: rgb(96, 105, 100); "
            >-</span
        ><span style="color: rgb(95, 104, 99); ">-</span><span style="color: rgb(97, 106, 101); "
            >-</span
        ><span style="color: rgb(97, 105, 100); ">-</span><span style="color: rgb(97, 105, 99); "
            >-</span
        ><span style="color: rgb(98, 106, 100); ">-</span><span style="color: rgb(99, 108, 103); "
            >-</span
        ><span style="color: rgb(96, 106, 100); ">-</span><span style="color: rgb(97, 106, 100); "
            >-</span
        ><span style="color: rgb(99, 106, 101); ">-</span><span style="color: rgb(100, 106, 98); "
            >-</span
        >
<span style="color: rgb(229, 203, 168); ">#</span><span style="color: rgb(228, 201, 167); ">#</span
        ><span style="color: rgb(228, 202, 167); ">#</span><span style="color: rgb(228, 202, 168); "
            >#</span
        ><span style="color: rgb(228, 203, 168); ">#</span><span style="color: rgb(228, 201, 166); "
            >#</span
        ><span style="color: rgb(227, 201, 165); ">#</span><span style="color: rgb(227, 201, 166); "
            >#</span
        ><span style="color: rgb(227, 201, 167); ">#</span><span style="color: rgb(227, 202, 167); "
            >#</span
        ><span style="color: rgb(227, 201, 166); ">#</span><span style="color: rgb(228, 202, 167); "
            >#</span
        ><span style="color: rgb(227, 201, 166); ">#</span><span style="color: rgb(227, 202, 166); "
            >#</span
        ><span style="color: rgb(228, 201, 167); ">#</span><span style="color: rgb(228, 202, 166); "
            >#</span
        ><span style="color: rgb(231, 206, 170); ">#</span><span style="color: rgb(145, 138, 117); "
            >=</span
        ><span style="color: rgb(142, 135, 111); ">=</span><span style="color: rgb(140, 133, 111); "
            >=</span
        ><span style="color: rgb(139, 133, 110); ">=</span><span style="color: rgb(138, 130, 110); "
            >=</span
        ><span style="color: rgb(136, 130, 110); ">=</span><span style="color: rgb(134, 126, 105); "
            >=</span
        ><span style="color: rgb(81, 73, 61); ">:</span><span style="color: rgb(56, 51, 44); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 49, 44); "
            >.</span
        ><span style="color: rgb(53, 49, 43); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(54, 48, 43); ">.</span><span style="color: rgb(51, 48, 41); "
            >.</span
        ><span style="color: rgb(53, 49, 43); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 43); ">.</span><span style="color: rgb(53, 48, 43); "
            >.</span
        ><span style="color: rgb(53, 49, 45); ">.</span><span style="color: rgb(53, 48, 43); "
            >.</span
        ><span style="color: rgb(52, 47, 42); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 43); ">.</span><span style="color: rgb(52, 47, 41); "
            >.</span
        ><span style="color: rgb(52, 47, 42); ">.</span><span style="color: rgb(50, 46, 40); "
            >.</span
        ><span style="color: rgb(52, 49, 44); ">.</span><span style="color: rgb(51, 47, 41); "
            >.</span
        ><span style="color: rgb(51, 46, 41); ">.</span><span style="color: rgb(52, 48, 42); "
            >.</span
        ><span style="color: rgb(52, 47, 41); ">.</span><span style="color: rgb(52, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 48, 41); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 47, 40); "
            >.</span
        ><span style="color: rgb(52, 47, 41); ">.</span><span style="color: rgb(53, 48, 41); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(50, 44, 38); "
            >.</span
        ><span style="color: rgb(110, 107, 91); ">-</span><span style="color: rgb(116, 114, 99); "
            >-</span
        ><span style="color: rgb(107, 105, 92); ">-</span><span style="color: rgb(114, 112, 98); "
            >-</span
        ><span style="color: rgb(112, 112, 99); ">-</span><span style="color: rgb(109, 111, 100); "
            >-</span
        ><span style="color: rgb(107, 110, 100); ">-</span><span style="color: rgb(108, 110, 101); "
            >-</span
        ><span style="color: rgb(107, 111, 100); ">-</span><span style="color: rgb(104, 107, 96); "
            >-</span
        ><span style="color: rgb(80, 84, 76); ">:</span><span style="color: rgb(95, 102, 98); "
            >-</span
        ><span style="color: rgb(96, 103, 97); ">-</span><span style="color: rgb(95, 104, 100); "
            >-</span
        ><span style="color: rgb(97, 104, 98); ">-</span><span style="color: rgb(97, 106, 100); "
            >-</span
        ><span style="color: rgb(97, 105, 99); ">-</span><span style="color: rgb(97, 104, 98); "
            >-</span
        ><span style="color: rgb(98, 105, 97); ">-</span><span style="color: rgb(97, 105, 98); "
            >-</span
        ><span style="color: rgb(98, 105, 98); ">-</span><span style="color: rgb(99, 106, 99); "
            >-</span
        >
<span style="color: rgb(229, 203, 168); ">#</span><span style="color: rgb(228, 201, 165); ">#</span
        ><span style="color: rgb(228, 202, 167); ">#</span><span style="color: rgb(228, 202, 167); "
            >#</span
        ><span style="color: rgb(228, 202, 167); ">#</span><span style="color: rgb(228, 201, 166); "
            >#</span
        ><span style="color: rgb(227, 201, 165); ">#</span><span style="color: rgb(228, 201, 165); "
            >#</span
        ><span style="color: rgb(227, 200, 164); ">#</span><span style="color: rgb(227, 200, 164); "
            >#</span
        ><span style="color: rgb(226, 200, 164); ">#</span><span style="color: rgb(227, 201, 165); "
            >#</span
        ><span style="color: rgb(227, 201, 165); ">#</span><span style="color: rgb(226, 200, 164); "
            >#</span
        ><span style="color: rgb(227, 200, 165); ">#</span><span style="color: rgb(227, 201, 166); "
            >#</span
        ><span style="color: rgb(230, 203, 169); ">#</span><span style="color: rgb(146, 138, 115); "
            >=</span
        ><span style="color: rgb(142, 134, 111); ">=</span><span style="color: rgb(142, 134, 112); "
            >=</span
        ><span style="color: rgb(119, 110, 90); ">-</span><span style="color: rgb(69, 60, 51); "
            >:</span
        ><span style="color: rgb(59, 53, 46); ">.</span><span style="color: rgb(55, 50, 44); "
            >.</span
        ><span style="color: rgb(55, 49, 43); ">.</span><span style="color: rgb(54, 49, 43); "
            >.</span
        ><span style="color: rgb(54, 49, 44); ">.</span><span style="color: rgb(54, 49, 44); "
            >.</span
        ><span style="color: rgb(53, 49, 43); ">.</span><span style="color: rgb(54, 49, 43); "
            >.</span
        ><span style="color: rgb(53, 48, 43); ">.</span><span style="color: rgb(54, 49, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(54, 48, 44); "
            >.</span
        ><span style="color: rgb(53, 49, 43); ">.</span><span style="color: rgb(53, 49, 43); "
            >.</span
        ><span style="color: rgb(53, 49, 42); ">.</span><span style="color: rgb(53, 48, 43); "
            >.</span
        ><span style="color: rgb(52, 48, 42); ">.</span><span style="color: rgb(53, 48, 43); "
            >.</span
        ><span style="color: rgb(53, 48, 43); ">.</span><span style="color: rgb(53, 49, 45); "
            >.</span
        ><span style="color: rgb(52, 48, 43); ">.</span><span style="color: rgb(52, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(52, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 43); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(52, 48, 42); "
            >.</span
        ><span style="color: rgb(52, 47, 42); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 47, 42); ">.</span><span style="color: rgb(52, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 43); ">.</span><span style="color: rgb(52, 48, 41); "
            >.</span
        ><span style="color: rgb(53, 48, 40); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(52, 48, 40); ">.</span><span style="color: rgb(53, 49, 42); "
            >.</span
        ><span style="color: rgb(53, 47, 40); ">.</span><span style="color: rgb(86, 83, 71); "
            >:</span
        ><span style="color: rgb(111, 111, 97); ">-</span><span style="color: rgb(110, 111, 98); "
            >-</span
        ><span style="color: rgb(107, 109, 98); ">-</span><span style="color: rgb(107, 110, 99); "
            >-</span
        ><span style="color: rgb(107, 110, 98); ">-</span><span style="color: rgb(104, 108, 99); "
            >-</span
        ><span style="color: rgb(103, 109, 98); ">-</span><span style="color: rgb(102, 107, 99); "
            >-</span
        ><span style="color: rgb(99, 105, 97); ">-</span><span style="color: rgb(88, 96, 93); "
            >-</span
        ><span style="color: rgb(95, 105, 100); ">-</span><span style="color: rgb(95, 105, 100); "
            >-</span
        ><span style="color: rgb(94, 103, 97); ">-</span><span style="color: rgb(95, 103, 97); "
            >-</span
        ><span style="color: rgb(96, 104, 99); ">-</span><span style="color: rgb(96, 105, 99); "
            >-</span
        ><span style="color: rgb(96, 104, 98); ">-</span><span style="color: rgb(97, 105, 99); "
            >-</span
        >
<span style="color: rgb(229, 203, 166); ">#</span><span style="color: rgb(228, 200, 164); ">#</span
        ><span style="color: rgb(228, 201, 164); ">#</span><span style="color: rgb(227, 200, 163); "
            >#</span
        ><span style="color: rgb(227, 201, 165); ">#</span><span style="color: rgb(227, 200, 164); "
            >#</span
        ><span style="color: rgb(227, 200, 163); ">#</span><span style="color: rgb(227, 200, 164); "
            >#</span
        ><span style="color: rgb(227, 201, 164); ">#</span><span style="color: rgb(227, 200, 162); "
            >#</span
        ><span style="color: rgb(227, 201, 164); ">#</span><span style="color: rgb(227, 200, 164); "
            >#</span
        ><span style="color: rgb(226, 199, 163); ">#</span><span style="color: rgb(227, 200, 164); "
            >#</span
        ><span style="color: rgb(197, 171, 138); ">*</span><span style="color: rgb(167, 147, 121); "
            >+</span
        ><span style="color: rgb(105, 91, 76); ">-</span><span style="color: rgb(59, 52, 45); "
            >.</span
        ><span style="color: rgb(59, 53, 46); ">.</span><span style="color: rgb(59, 53, 47); "
            >.</span
        ><span style="color: rgb(66, 59, 50); ">:</span><span style="color: rgb(77, 68, 58); "
            >:</span
        ><span style="color: rgb(68, 61, 53); ">:</span><span style="color: rgb(76, 66, 57); "
            >:</span
        ><span style="color: rgb(68, 61, 53); ">:</span><span style="color: rgb(66, 60, 53); "
            >:</span
        ><span style="color: rgb(54, 49, 44); ">.</span><span style="color: rgb(53, 48, 43); "
            >.</span
        ><span style="color: rgb(54, 48, 42); ">.</span><span style="color: rgb(53, 49, 42); "
            >.</span
        ><span style="color: rgb(53, 49, 43); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 47, 41); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(54, 50, 43); ">.</span><span style="color: rgb(53, 49, 43); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(54, 48, 43); "
            >.</span
        ><span style="color: rgb(52, 48, 42); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 48, 43); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 48, 41); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(52, 46, 40); "
            >.</span
        ><span style="color: rgb(53, 48, 43); ">.</span><span style="color: rgb(52, 47, 40); "
            >.</span
        ><span style="color: rgb(52, 47, 41); ">.</span><span style="color: rgb(52, 47, 41); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 49, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 41); ">.</span><span style="color: rgb(54, 48, 43); "
            >.</span
        ><span style="color: rgb(53, 48, 41); ">.</span><span style="color: rgb(53, 49, 42); "
            >.</span
        ><span style="color: rgb(52, 46, 39); ">.</span><span style="color: rgb(79, 76, 65); "
            >:</span
        ><span style="color: rgb(107, 108, 95); ">-</span><span style="color: rgb(107, 108, 95); "
            >-</span
        ><span style="color: rgb(105, 107, 94); ">-</span><span style="color: rgb(105, 109, 98); "
            >-</span
        ><span style="color: rgb(101, 107, 97); ">-</span><span style="color: rgb(101, 107, 98); "
            >-</span
        ><span style="color: rgb(102, 108, 100); ">-</span><span style="color: rgb(101, 108, 99); "
            >-</span
        ><span style="color: rgb(99, 105, 96); ">-</span><span style="color: rgb(96, 103, 97); "
            >-</span
        ><span style="color: rgb(93, 102, 97); ">-</span><span style="color: rgb(93, 103, 97); "
            >-</span
        ><span style="color: rgb(95, 103, 98); ">-</span><span style="color: rgb(93, 102, 97); "
            >-</span
        ><span style="color: rgb(94, 102, 97); ">-</span><span style="color: rgb(94, 103, 97); "
            >-</span
        >
<span style="color: rgb(228, 201, 165); ">#</span><span style="color: rgb(227, 200, 164); ">#</span
        ><span style="color: rgb(228, 201, 165); ">#</span><span style="color: rgb(227, 201, 163); "
            >#</span
        ><span style="color: rgb(227, 200, 163); ">#</span><span style="color: rgb(227, 199, 163); "
            >#</span
        ><span style="color: rgb(227, 201, 161); ">#</span><span style="color: rgb(226, 199, 161); "
            >#</span
        ><span style="color: rgb(226, 199, 161); ">#</span><span style="color: rgb(226, 198, 161); "
            >#</span
        ><span style="color: rgb(226, 199, 161); ">#</span><span style="color: rgb(226, 199, 161); "
            >#</span
        ><span style="color: rgb(227, 199, 162); ">#</span><span style="color: rgb(226, 198, 161); "
            >#</span
        ><span style="color: rgb(226, 198, 160); ">#</span><span style="color: rgb(226, 197, 159); "
            >#</span
        ><span style="color: rgb(209, 183, 150); ">*</span><span style="color: rgb(73, 65, 57); "
            >:</span
        ><span style="color: rgb(60, 53, 45); ">.</span><span style="color: rgb(90, 80, 68); "
            >:</span
        ><span style="color: rgb(92, 82, 68); ">:</span><span style="color: rgb(93, 82, 70); "
            >:</span
        ><span style="color: rgb(64, 59, 51); ">:</span><span style="color: rgb(79, 71, 62); "
            >:</span
        ><span style="color: rgb(56, 51, 46); ">.</span><span style="color: rgb(55, 50, 43); "
            >.</span
        ><span style="color: rgb(54, 50, 43); ">.</span><span style="color: rgb(54, 49, 42); "
            >.</span
        ><span style="color: rgb(54, 48, 42); ">.</span><span style="color: rgb(54, 49, 43); "
            >.</span
        ><span style="color: rgb(54, 48, 42); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(54, 49, 44); ">.</span><span style="color: rgb(54, 48, 44); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(53, 49, 43); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(54, 49, 43); "
            >.</span
        ><span style="color: rgb(55, 50, 43); ">.</span><span style="color: rgb(54, 49, 43); "
            >.</span
        ><span style="color: rgb(53, 48, 42); ">.</span><span style="color: rgb(54, 48, 42); "
            >.</span
        ><span style="color: rgb(54, 49, 42); ">.</span><span style="color: rgb(53, 48, 44); "
            >.</span
        ><span style="color: rgb(53, 48, 41); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 49, 43); ">.</span><span style="color: rgb(53, 48, 40); "
            >.</span
        ><span style="color: rgb(52, 47, 40); ">.</span><span style="color: rgb(52, 47, 40); "
            >.</span
        ><span style="color: rgb(52, 47, 41); ">.</span><span style="color: rgb(52, 47, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 41); ">.</span><span style="color: rgb(53, 49, 41); "
            >.</span
        ><span style="color: rgb(54, 49, 42); ">.</span><span style="color: rgb(53, 47, 40); "
            >.</span
        ><span style="color: rgb(53, 47, 40); ">.</span><span style="color: rgb(53, 48, 41); "
            >.</span
        ><span style="color: rgb(53, 48, 41); ">.</span><span style="color: rgb(54, 49, 42); "
            >.</span
        ><span style="color: rgb(52, 48, 41); ">.</span><span style="color: rgb(40, 39, 35); "
            >.</span
        ><span style="color: rgb(54, 49, 42); ">.</span><span style="color: rgb(54, 49, 41); "
            >.</span
        ><span style="color: rgb(63, 60, 52); ">:</span><span style="color: rgb(105, 107, 95); "
            >-</span
        ><span style="color: rgb(104, 108, 97); ">-</span><span style="color: rgb(103, 106, 96); "
            >-</span
        ><span style="color: rgb(102, 107, 97); ">-</span><span style="color: rgb(102, 107, 98); "
            >-</span
        ><span style="color: rgb(102, 108, 100); ">-</span><span style="color: rgb(100, 107, 99); "
            >-</span
        ><span style="color: rgb(101, 107, 99); ">-</span><span style="color: rgb(101, 107, 99); "
            >-</span
        ><span style="color: rgb(100, 105, 97); ">-</span><span style="color: rgb(89, 94, 87); "
            >-</span
        ><span style="color: rgb(90, 99, 94); ">-</span><span style="color: rgb(91, 100, 96); "
            >-</span
        ><span style="color: rgb(91, 101, 96); ">-</span><span style="color: rgb(92, 100, 94); "
            >-</span
        >
<span style="color: rgb(228, 200, 163); ">#</span><span style="color: rgb(226, 199, 160); ">#</span
        ><span style="color: rgb(227, 199, 161); ">#</span><span style="color: rgb(226, 199, 160); "
            >#</span
        ><span style="color: rgb(226, 199, 160); ">#</span><span style="color: rgb(226, 199, 161); "
            >#</span
        ><span style="color: rgb(226, 198, 159); ">#</span><span style="color: rgb(226, 198, 161); "
            >#</span
        ><span style="color: rgb(226, 199, 160); ">#</span><span style="color: rgb(225, 198, 159); "
            >#</span
        ><span style="color: rgb(226, 198, 160); ">#</span><span style="color: rgb(225, 195, 157); "
            >#</span
        ><span style="color: rgb(225, 197, 158); ">#</span><span style="color: rgb(225, 196, 157); "
            >#</span
        ><span style="color: rgb(222, 192, 152); ">*</span><span style="color: rgb(72, 63, 54); "
            >:</span
        ><span style="color: rgb(58, 50, 44); ">.</span><span style="color: rgb(61, 53, 46); "
            >.</span
        ><span style="color: rgb(90, 79, 65); ">:</span><span style="color: rgb(80, 71, 62); "
            >:</span
        ><span style="color: rgb(58, 53, 45); ">.</span><span style="color: rgb(56, 50, 44); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(55, 49, 43); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(55, 49, 43); "
            >.</span
        ><span style="color: rgb(55, 50, 43); ">.</span><span style="color: rgb(55, 50, 43); "
            >.</span
        ><span style="color: rgb(54, 49, 43); ">.</span><span style="color: rgb(54, 49, 43); "
            >.</span
        ><span style="color: rgb(54, 48, 42); ">.</span><span style="color: rgb(54, 49, 43); "
            >.</span
        ><span style="color: rgb(54, 49, 43); ">.</span><span style="color: rgb(54, 50, 43); "
            >.</span
        ><span style="color: rgb(54, 49, 42); ">.</span><span style="color: rgb(54, 48, 43); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(55, 49, 43); "
            >.</span
        ><span style="color: rgb(54, 48, 43); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(54, 49, 42); ">.</span><span style="color: rgb(54, 50, 44); "
            >.</span
        ><span style="color: rgb(54, 48, 42); ">.</span><span style="color: rgb(52, 48, 42); "
            >.</span
        ><span style="color: rgb(54, 50, 44); ">.</span><span style="color: rgb(54, 48, 41); "
            >.</span
        ><span style="color: rgb(52, 46, 40); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 47, 40); ">.</span><span style="color: rgb(54, 49, 41); "
            >.</span
        ><span style="color: rgb(53, 47, 40); ">.</span><span style="color: rgb(54, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 41); ">.</span><span style="color: rgb(53, 47, 39); "
            >.</span
        ><span style="color: rgb(54, 48, 41); ">.</span><span style="color: rgb(54, 49, 42); "
            >.</span
        ><span style="color: rgb(54, 49, 42); ">.</span><span style="color: rgb(53, 46, 38); "
            >.</span
        ><span style="color: rgb(54, 48, 42); ">.</span><span style="color: rgb(54, 47, 40); "
            >.</span
        ><span style="color: rgb(49, 46, 40); ">.</span><span style="color: rgb(47, 44, 38); "
            >.</span
        ><span style="color: rgb(35, 36, 34); ">.</span><span style="color: rgb(38, 38, 35); "
            >.</span
        ><span style="color: rgb(52, 48, 41); ">.</span><span style="color: rgb(54, 49, 42); "
            >.</span
        ><span style="color: rgb(97, 99, 89); ">-</span><span style="color: rgb(102, 105, 95); "
            >-</span
        ><span style="color: rgb(104, 108, 97); ">-</span><span style="color: rgb(100, 106, 97); "
            >-</span
        ><span style="color: rgb(101, 105, 97); ">-</span><span style="color: rgb(100, 107, 100); "
            >-</span
        ><span style="color: rgb(101, 106, 97); ">-</span><span style="color: rgb(101, 106, 98); "
            >-</span
        ><span style="color: rgb(103, 107, 99); ">-</span><span style="color: rgb(102, 106, 97); "
            >-</span
        ><span style="color: rgb(88, 97, 93); ">-</span><span style="color: rgb(88, 98, 95); "
            >-</span
        ><span style="color: rgb(89, 99, 94); ">-</span><span style="color: rgb(92, 101, 96); "
            >-</span
        >
<span style="color: rgb(228, 200, 162); ">#</span><span style="color: rgb(227, 201, 162); ">#</span
        ><span style="color: rgb(226, 199, 160); ">#</span><span style="color: rgb(226, 199, 161); "
            >#</span
        ><span style="color: rgb(226, 199, 161); ">#</span><span style="color: rgb(226, 198, 158); "
            >#</span
        ><span style="color: rgb(225, 197, 157); ">#</span><span style="color: rgb(225, 197, 157); "
            >#</span
        ><span style="color: rgb(225, 197, 157); ">#</span><span style="color: rgb(225, 197, 158); "
            >#</span
        ><span style="color: rgb(225, 197, 156); ">#</span><span style="color: rgb(225, 197, 156); "
            >#</span
        ><span style="color: rgb(225, 196, 156); ">#</span><span style="color: rgb(109, 93, 74); "
            >-</span
        ><span style="color: rgb(60, 54, 46); ">.</span><span style="color: rgb(59, 52, 46); "
            >.</span
        ><span style="color: rgb(59, 52, 45); ">.</span><span style="color: rgb(62, 55, 48); "
            >.</span
        ><span style="color: rgb(57, 52, 46); ">.</span><span style="color: rgb(57, 51, 45); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(56, 49, 43); "
            >.</span
        ><span style="color: rgb(56, 49, 42); ">.</span><span style="color: rgb(57, 51, 43); "
            >.</span
        ><span style="color: rgb(56, 51, 44); ">.</span><span style="color: rgb(55, 48, 40); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(55, 49, 43); "
            >.</span
        ><span style="color: rgb(55, 49, 43); ">.</span><span style="color: rgb(56, 50, 43); "
            >.</span
        ><span style="color: rgb(55, 49, 43); ">.</span><span style="color: rgb(56, 50, 43); "
            >.</span
        ><span style="color: rgb(55, 50, 44); ">.</span><span style="color: rgb(56, 50, 43); "
            >.</span
        ><span style="color: rgb(56, 49, 43); ">.</span><span style="color: rgb(55, 49, 43); "
            >.</span
        ><span style="color: rgb(54, 49, 44); ">.</span><span style="color: rgb(55, 50, 44); "
            >.</span
        ><span style="color: rgb(55, 50, 44); ">.</span><span style="color: rgb(55, 51, 44); "
            >.</span
        ><span style="color: rgb(56, 50, 45); ">.</span><span style="color: rgb(54, 49, 42); "
            >.</span
        ><span style="color: rgb(54, 48, 41); ">.</span><span style="color: rgb(54, 49, 42); "
            >.</span
        ><span style="color: rgb(52, 47, 39); ">.</span><span style="color: rgb(54, 48, 41); "
            >.</span
        ><span style="color: rgb(54, 48, 41); ">.</span><span style="color: rgb(54, 48, 42); "
            >.</span
        ><span style="color: rgb(54, 48, 41); ">.</span><span style="color: rgb(54, 49, 43); "
            >.</span
        ><span style="color: rgb(54, 48, 42); ">.</span><span style="color: rgb(53, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 41); ">.</span><span style="color: rgb(54, 49, 44); "
            >.</span
        ><span style="color: rgb(54, 49, 42); ">.</span><span style="color: rgb(54, 48, 40); "
            >.</span
        ><span style="color: rgb(53, 49, 41); ">.</span><span style="color: rgb(53, 48, 40); "
            >.</span
        ><span style="color: rgb(53, 49, 44); ">.</span><span style="color: rgb(54, 50, 41); "
            >.</span
        ><span style="color: rgb(49, 45, 39); ">.</span><span style="color: rgb(48, 46, 40); "
            >.</span
        ><span style="color: rgb(34, 35, 32); ">.</span><span style="color: rgb(34, 35, 34); "
            >.</span
        ><span style="color: rgb(35, 36, 34); ">.</span><span style="color: rgb(35, 36, 34); "
            >.</span
        ><span style="color: rgb(50, 46, 38); ">.</span><span style="color: rgb(72, 69, 60); "
            >:</span
        ><span style="color: rgb(102, 106, 96); ">-</span><span style="color: rgb(101, 105, 96); "
            >-</span
        ><span style="color: rgb(100, 105, 96); ">-</span><span style="color: rgb(102, 107, 98); "
            >-</span
        ><span style="color: rgb(100, 106, 99); ">-</span><span style="color: rgb(101, 105, 98); "
            >-</span
        ><span style="color: rgb(101, 107, 98); ">-</span><span style="color: rgb(100, 105, 98); "
            >-</span
        ><span style="color: rgb(88, 96, 92); ">-</span><span style="color: rgb(87, 97, 93); "
            >-</span
        ><span style="color: rgb(89, 98, 92); ">-</span><span style="color: rgb(89, 98, 92); "
            >-</span
        >
<span style="color: rgb(227, 199, 160); ">#</span><span style="color: rgb(226, 199, 160); ">#</span
        ><span style="color: rgb(226, 198, 159); ">#</span><span style="color: rgb(225, 198, 159); "
            >#</span
        ><span style="color: rgb(226, 198, 160); ">#</span><span style="color: rgb(225, 197, 158); "
            >#</span
        ><span style="color: rgb(225, 197, 157); ">#</span><span style="color: rgb(225, 198, 159); "
            >#</span
        ><span style="color: rgb(225, 198, 159); ">#</span><span style="color: rgb(225, 196, 156); "
            >#</span
        ><span style="color: rgb(224, 196, 157); ">#</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(111, 96, 77); ">-</span><span style="color: rgb(60, 54, 46); "
            >.</span
        ><span style="color: rgb(50, 43, 36); ">.</span><span style="color: rgb(57, 51, 44); "
            >.</span
        ><span style="color: rgb(56, 51, 43); ">.</span><span style="color: rgb(57, 51, 44); "
            >.</span
        ><span style="color: rgb(57, 51, 45); ">.</span><span style="color: rgb(57, 51, 44); "
            >.</span
        ><span style="color: rgb(58, 52, 46); ">.</span><span style="color: rgb(58, 51, 44); "
            >.</span
        ><span style="color: rgb(56, 50, 42); ">.</span><span style="color: rgb(56, 50, 44); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(52, 44, 39); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(55, 49, 42); "
            >.</span
        ><span style="color: rgb(51, 44, 37); ">.</span><span style="color: rgb(57, 50, 44); "
            >.</span
        ><span style="color: rgb(56, 50, 43); ">.</span><span style="color: rgb(56, 50, 43); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(57, 52, 45); "
            >.</span
        ><span style="color: rgb(56, 50, 43); ">.</span><span style="color: rgb(56, 50, 45); "
            >.</span
        ><span style="color: rgb(52, 46, 40); ">.</span><span style="color: rgb(56, 50, 42); "
            >.</span
        ><span style="color: rgb(55, 50, 44); ">.</span><span style="color: rgb(55, 50, 44); "
            >.</span
        ><span style="color: rgb(55, 49, 43); ">.</span><span style="color: rgb(55, 49, 41); "
            >.</span
        ><span style="color: rgb(55, 50, 43); ">.</span><span style="color: rgb(54, 48, 40); "
            >.</span
        ><span style="color: rgb(54, 49, 42); ">.</span><span style="color: rgb(54, 49, 42); "
            >.</span
        ><span style="color: rgb(55, 50, 42); ">.</span><span style="color: rgb(54, 48, 42); "
            >.</span
        ><span style="color: rgb(54, 48, 41); ">.</span><span style="color: rgb(53, 49, 42); "
            >.</span
        ><span style="color: rgb(53, 48, 41); ">.</span><span style="color: rgb(54, 49, 42); "
            >.</span
        ><span style="color: rgb(54, 48, 42); ">.</span><span style="color: rgb(55, 48, 42); "
            >.</span
        ><span style="color: rgb(53, 49, 43); ">.</span><span style="color: rgb(54, 49, 42); "
            >.</span
        ><span style="color: rgb(54, 48, 41); ">.</span><span style="color: rgb(54, 49, 43); "
            >.</span
        ><span style="color: rgb(55, 51, 45); ">.</span><span style="color: rgb(54, 49, 41); "
            >.</span
        ><span style="color: rgb(47, 44, 37); ">.</span><span style="color: rgb(34, 35, 32); "
            >.</span
        ><span style="color: rgb(34, 34, 32); ">.</span><span style="color: rgb(35, 35, 33); "
            >.</span
        ><span style="color: rgb(35, 36, 34); ">.</span><span style="color: rgb(34, 35, 33); "
            >.</span
        ><span style="color: rgb(34, 36, 34); ">.</span><span style="color: rgb(42, 41, 37); "
            >.</span
        ><span style="color: rgb(89, 91, 80); ">-</span><span style="color: rgb(100, 104, 96); "
            >-</span
        ><span style="color: rgb(99, 105, 97); ">-</span><span style="color: rgb(100, 106, 99); "
            >-</span
        ><span style="color: rgb(98, 105, 98); ">-</span><span style="color: rgb(98, 105, 98); "
            >-</span
        ><span style="color: rgb(100, 107, 99); ">-</span><span style="color: rgb(99, 105, 97); "
            >-</span
        ><span style="color: rgb(86, 95, 91); ">-</span><span style="color: rgb(87, 95, 90); "
            >-</span
        ><span style="color: rgb(87, 95, 91); ">-</span><span style="color: rgb(89, 96, 91); "
            >-</span
        >
<span style="color: rgb(226, 199, 160); ">#</span><span style="color: rgb(226, 198, 159); ">#</span
        ><span style="color: rgb(226, 198, 159); ">#</span><span style="color: rgb(225, 197, 158); "
            >#</span
        ><span style="color: rgb(225, 197, 158); ">#</span><span style="color: rgb(225, 197, 158); "
            >#</span
        ><span style="color: rgb(225, 197, 158); ">#</span><span style="color: rgb(225, 196, 157); "
            >#</span
        ><span style="color: rgb(224, 195, 156); ">#</span><span style="color: rgb(224, 196, 156); "
            >#</span
        ><span style="color: rgb(223, 193, 152); ">*</span><span style="color: rgb(86, 71, 56); "
            >:</span
        ><span style="color: rgb(61, 53, 46); ">.</span><span style="color: rgb(81, 72, 58); "
            >:</span
        ><span style="color: rgb(56, 50, 43); ">.</span><span style="color: rgb(58, 52, 45); "
            >.</span
        ><span style="color: rgb(58, 52, 44); ">.</span><span style="color: rgb(57, 51, 44); "
            >.</span
        ><span style="color: rgb(57, 52, 46); ">.</span><span style="color: rgb(57, 51, 44); "
            >.</span
        ><span style="color: rgb(54, 47, 40); ">.</span><span style="color: rgb(57, 50, 44); "
            >.</span
        ><span style="color: rgb(56, 50, 43); ">.</span><span style="color: rgb(58, 52, 45); "
            >.</span
        ><span style="color: rgb(135, 94, 67); ">-</span><span style="color: rgb(124, 89, 62); "
            >-</span
        ><span style="color: rgb(57, 51, 44); ">.</span><span style="color: rgb(56, 50, 42); "
            >.</span
        ><span style="color: rgb(68, 51, 38); ">.</span><span style="color: rgb(59, 51, 43); "
            >.</span
        ><span style="color: rgb(57, 50, 42); ">.</span><span style="color: rgb(57, 50, 42); "
            >.</span
        ><span style="color: rgb(57, 51, 44); ">.</span><span style="color: rgb(63, 50, 40); "
            >.</span
        ><span style="color: rgb(59, 50, 43); ">.</span><span style="color: rgb(57, 51, 44); "
            >.</span
        ><span style="color: rgb(57, 50, 43); ">.</span><span style="color: rgb(50, 41, 35); "
            >.</span
        ><span style="color: rgb(57, 51, 43); ">.</span><span style="color: rgb(56, 50, 43); "
            >.</span
        ><span style="color: rgb(56, 50, 42); ">.</span><span style="color: rgb(56, 49, 43); "
            >.</span
        ><span style="color: rgb(54, 49, 42); ">.</span><span style="color: rgb(56, 49, 43); "
            >.</span
        ><span style="color: rgb(56, 49, 42); ">.</span><span style="color: rgb(56, 50, 43); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(55, 49, 41); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(55, 48, 41); "
            >.</span
        ><span style="color: rgb(55, 49, 41); ">.</span><span style="color: rgb(55, 49, 42); "
            >.</span
        ><span style="color: rgb(54, 49, 41); ">.</span><span style="color: rgb(55, 49, 41); "
            >.</span
        ><span style="color: rgb(55, 48, 41); ">.</span><span style="color: rgb(55, 49, 41); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(54, 48, 41); "
            >.</span
        ><span style="color: rgb(54, 49, 41); ">.</span><span style="color: rgb(38, 38, 34); "
            >.</span
        ><span style="color: rgb(48, 44, 37); ">.</span><span style="color: rgb(35, 35, 33); "
            >.</span
        ><span style="color: rgb(35, 35, 33); ">.</span><span style="color: rgb(35, 36, 34); "
            >.</span
        ><span style="color: rgb(35, 36, 34); ">.</span><span style="color: rgb(35, 36, 33); "
            >.</span
        ><span style="color: rgb(34, 35, 33); ">.</span><span style="color: rgb(35, 35, 33); "
            >.</span
        ><span style="color: rgb(37, 38, 35); ">.</span><span style="color: rgb(84, 88, 80); "
            >-</span
        ><span style="color: rgb(98, 104, 97); ">-</span><span style="color: rgb(99, 105, 98); "
            >-</span
        ><span style="color: rgb(98, 104, 97); ">-</span><span style="color: rgb(99, 106, 99); "
            >-</span
        ><span style="color: rgb(100, 105, 97); ">-</span><span style="color: rgb(99, 103, 95); "
            >-</span
        ><span style="color: rgb(81, 88, 85); ">-</span><span style="color: rgb(81, 90, 86); "
            >-</span
        ><span style="color: rgb(82, 91, 89); ">-</span><span style="color: rgb(84, 92, 88); "
            >-</span
        >
<span style="color: rgb(227, 199, 158); ">#</span><span style="color: rgb(226, 198, 159); ">#</span
        ><span style="color: rgb(226, 198, 158); ">#</span><span style="color: rgb(226, 198, 159); "
            >#</span
        ><span style="color: rgb(225, 197, 156); ">#</span><span style="color: rgb(225, 197, 157); "
            >#</span
        ><span style="color: rgb(224, 195, 155); ">#</span><span style="color: rgb(224, 195, 155); "
            >#</span
        ><span style="color: rgb(223, 195, 155); ">#</span><span style="color: rgb(224, 194, 154); "
            >*</span
        ><span style="color: rgb(190, 163, 128); ">+</span><span style="color: rgb(67, 59, 50); "
            >:</span
        ><span style="color: rgb(135, 116, 91); ">=</span><span style="color: rgb(61, 53, 45); "
            >.</span
        ><span style="color: rgb(59, 52, 45); ">.</span><span style="color: rgb(58, 53, 45); "
            >.</span
        ><span style="color: rgb(58, 51, 44); ">.</span><span style="color: rgb(59, 53, 46); "
            >.</span
        ><span style="color: rgb(58, 52, 45); ">.</span><span style="color: rgb(56, 50, 42); "
            >.</span
        ><span style="color: rgb(52, 44, 36); ">.</span><span style="color: rgb(55, 48, 40); "
            >.</span
        ><span style="color: rgb(57, 51, 43); ">.</span><span style="color: rgb(59, 52, 44); "
            >.</span
        ><span style="color: rgb(154, 106, 71); ">=</span><span style="color: rgb(200, 153, 113); "
            >+</span
        ><span style="color: rgb(68, 58, 49); ">:</span><span style="color: rgb(59, 52, 44); "
            >.</span
        ><span style="color: rgb(68, 55, 43); ">:</span><span style="color: rgb(190, 139, 100); "
            >+</span
        ><span style="color: rgb(60, 52, 45); ">.</span><span style="color: rgb(60, 52, 44); "
            >.</span
        ><span style="color: rgb(59, 53, 44); ">.</span><span style="color: rgb(61, 53, 43); "
            >.</span
        ><span style="color: rgb(137, 95, 65); ">-</span><span style="color: rgb(55, 46, 38); "
            >.</span
        ><span style="color: rgb(60, 53, 45); ">.</span><span style="color: rgb(60, 51, 42); "
            >.</span
        ><span style="color: rgb(151, 103, 70); ">=</span><span style="color: rgb(56, 49, 42); "
            >.</span
        ><span style="color: rgb(58, 51, 43); ">.</span><span style="color: rgb(58, 52, 44); "
            >.</span
        ><span style="color: rgb(53, 45, 37); ">.</span><span style="color: rgb(57, 50, 43); "
            >.</span
        ><span style="color: rgb(56, 50, 42); ">.</span><span style="color: rgb(56, 50, 42); "
            >.</span
        ><span style="color: rgb(56, 48, 41); ">.</span><span style="color: rgb(55, 49, 41); "
            >.</span
        ><span style="color: rgb(56, 50, 43); ">.</span><span style="color: rgb(55, 49, 42); "
            >.</span
        ><span style="color: rgb(55, 49, 41); ">.</span><span style="color: rgb(56, 49, 41); "
            >.</span
        ><span style="color: rgb(55, 49, 42); ">.</span><span style="color: rgb(56, 50, 43); "
            >.</span
        ><span style="color: rgb(56, 50, 43); ">.</span><span style="color: rgb(56, 49, 42); "
            >.</span
        ><span style="color: rgb(55, 48, 41); ">.</span><span style="color: rgb(54, 48, 40); "
            >.</span
        ><span style="color: rgb(53, 48, 41); ">.</span><span style="color: rgb(38, 38, 34); "
            >.</span
        ><span style="color: rgb(35, 35, 32); ">.</span><span style="color: rgb(35, 36, 35); "
            >.</span
        ><span style="color: rgb(36, 37, 35); ">.</span><span style="color: rgb(35, 37, 34); "
            >.</span
        ><span style="color: rgb(36, 37, 34); ">.</span><span style="color: rgb(35, 36, 33); "
            >.</span
        ><span style="color: rgb(35, 35, 32); ">.</span><span style="color: rgb(35, 36, 33); "
            >.</span
        ><span style="color: rgb(36, 37, 35); ">.</span><span style="color: rgb(40, 38, 33); "
            >.</span
        ><span style="color: rgb(96, 102, 93); ">-</span><span style="color: rgb(98, 104, 97); "
            >-</span
        ><span style="color: rgb(98, 105, 98); ">-</span><span style="color: rgb(100, 106, 100); "
            >-</span
        ><span style="color: rgb(101, 107, 97); ">-</span><span style="color: rgb(98, 103, 94); "
            >-</span
        ><span style="color: rgb(80, 88, 86); ">-</span><span style="color: rgb(80, 90, 87); "
            >-</span
        ><span style="color: rgb(81, 90, 87); ">-</span><span style="color: rgb(82, 90, 86); "
            >-</span
        >
<span style="color: rgb(226, 199, 159); ">#</span><span style="color: rgb(226, 199, 159); ">#</span
        ><span style="color: rgb(225, 197, 157); ">#</span><span style="color: rgb(225, 197, 157); "
            >#</span
        ><span style="color: rgb(225, 197, 157); ">#</span><span style="color: rgb(225, 196, 155); "
            >#</span
        ><span style="color: rgb(224, 196, 155); ">#</span><span style="color: rgb(224, 195, 154); "
            >#</span
        ><span style="color: rgb(222, 194, 154); ">*</span><span style="color: rgb(224, 194, 153); "
            >*</span
        ><span style="color: rgb(173, 149, 118); ">+</span><span style="color: rgb(143, 122, 95); "
            >=</span
        ><span style="color: rgb(154, 130, 101); ">=</span><span style="color: rgb(62, 55, 46); "
            >.</span
        ><span style="color: rgb(60, 53, 45); ">.</span><span style="color: rgb(60, 51, 44); "
            >.</span
        ><span style="color: rgb(58, 52, 44); ">.</span><span style="color: rgb(58, 52, 45); "
            >.</span
        ><span style="color: rgb(58, 52, 46); ">.</span><span style="color: rgb(59, 52, 44); "
            >.</span
        ><span style="color: rgb(83, 61, 43); ">:</span><span style="color: rgb(69, 57, 46); "
            >:</span
        ><span style="color: rgb(59, 52, 45); ">.</span><span style="color: rgb(73, 61, 50); "
            >:</span
        ><span style="color: rgb(215, 161, 116); ">*</span><span style="color: rgb(228, 175, 130); "
            >*</span
        ><span style="color: rgb(208, 162, 121); ">*</span><span style="color: rgb(63, 56, 47); "
            >:</span
        ><span style="color: rgb(77, 63, 50); ">:</span><span style="color: rgb(217, 162, 117); "
            >*</span
        ><span style="color: rgb(225, 173, 130); ">*</span><span style="color: rgb(102, 81, 59); "
            >-</span
        ><span style="color: rgb(62, 53, 43); ">.</span><span style="color: rgb(63, 54, 44); "
            >.</span
        ><span style="color: rgb(62, 50, 41); ">.</span><span style="color: rgb(225, 172, 128); "
            >*</span
        ><span style="color: rgb(155, 109, 75); ">=</span><span style="color: rgb(62, 54, 44); "
            >.</span
        ><span style="color: rgb(78, 65, 52); ">:</span><span style="color: rgb(199, 142, 99); "
            >+</span
        ><span style="color: rgb(126, 90, 64); ">-</span><span style="color: rgb(60, 51, 41); "
            >.</span
        ><span style="color: rgb(59, 52, 44); ">.</span><span style="color: rgb(49, 41, 33); "
            >.</span
        ><span style="color: rgb(55, 50, 42); ">.</span><span style="color: rgb(57, 51, 43); "
            >.</span
        ><span style="color: rgb(57, 52, 43); ">.</span><span style="color: rgb(57, 51, 43); "
            >.</span
        ><span style="color: rgb(55, 48, 41); ">.</span><span style="color: rgb(53, 46, 39); "
            >.</span
        ><span style="color: rgb(55, 49, 41); ">.</span><span style="color: rgb(57, 51, 43); "
            >.</span
        ><span style="color: rgb(57, 49, 41); ">.</span><span style="color: rgb(58, 51, 42); "
            >.</span
        ><span style="color: rgb(57, 52, 43); ">.</span><span style="color: rgb(56, 50, 42); "
            >.</span
        ><span style="color: rgb(56, 51, 42); ">.</span><span style="color: rgb(44, 41, 35); "
            >.</span
        ><span style="color: rgb(53, 48, 40); ">.</span><span style="color: rgb(36, 36, 33); "
            >.</span
        ><span style="color: rgb(35, 35, 32); ">.</span><span style="color: rgb(36, 37, 34); "
            >.</span
        ><span style="color: rgb(36, 37, 35); ">.</span><span style="color: rgb(35, 36, 33); "
            >.</span
        ><span style="color: rgb(35, 36, 34); ">.</span><span style="color: rgb(35, 36, 34); "
            >.</span
        ><span style="color: rgb(36, 37, 35); ">.</span><span style="color: rgb(36, 37, 35); "
            >.</span
        ><span style="color: rgb(36, 37, 36); ">.</span><span style="color: rgb(35, 36, 35); "
            >.</span
        ><span style="color: rgb(61, 60, 54); ">:</span><span style="color: rgb(97, 105, 97); "
            >-</span
        ><span style="color: rgb(99, 106, 99); ">-</span><span style="color: rgb(100, 106, 98); "
            >-</span
        ><span style="color: rgb(100, 108, 100); ">-</span><span style="color: rgb(99, 104, 95); "
            >-</span
        ><span style="color: rgb(78, 87, 83); ">:</span><span style="color: rgb(78, 88, 86); "
            >-</span
        ><span style="color: rgb(80, 88, 85); ">-</span><span style="color: rgb(82, 89, 87); "
            >-</span
        >
<span style="color: rgb(226, 198, 159); ">#</span><span style="color: rgb(225, 196, 157); ">#</span
        ><span style="color: rgb(225, 196, 156); ">#</span><span style="color: rgb(224, 195, 155); "
            >#</span
        ><span style="color: rgb(225, 196, 154); ">#</span><span style="color: rgb(224, 196, 157); "
            >#</span
        ><span style="color: rgb(224, 195, 155); ">#</span><span style="color: rgb(223, 195, 155); "
            >#</span
        ><span style="color: rgb(224, 196, 155); ">#</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(200, 173, 135); ">*</span><span style="color: rgb(215, 186, 145); "
            >*</span
        ><span style="color: rgb(137, 116, 90); ">=</span><span style="color: rgb(63, 56, 48); "
            >:</span
        ><span style="color: rgb(60, 54, 45); ">.</span><span style="color: rgb(58, 52, 44); "
            >.</span
        ><span style="color: rgb(60, 53, 46); ">.</span><span style="color: rgb(49, 45, 39); "
            >.</span
        ><span style="color: rgb(49, 42, 35); ">.</span><span style="color: rgb(61, 54, 45); "
            >.</span
        ><span style="color: rgb(210, 149, 104); ">+</span><span style="color: rgb(84, 65, 49); "
            >:</span
        ><span style="color: rgb(61, 54, 46); ">.</span><span style="color: rgb(83, 68, 55); "
            >:</span
        ><span style="color: rgb(229, 175, 129); ">*</span><span style="color: rgb(229, 177, 132); "
            >*</span
        ><span style="color: rgb(229, 178, 133); ">*</span><span style="color: rgb(154, 119, 88); "
            >=</span
        ><span style="color: rgb(64, 56, 48); ">:</span><span style="color: rgb(177, 137, 103); "
            >+</span
        ><span style="color: rgb(228, 175, 131); ">*</span><span style="color: rgb(228, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 174, 129); ">*</span><span style="color: rgb(130, 101, 75); "
            >-</span
        ><span style="color: rgb(68, 58, 48); ">:</span><span style="color: rgb(102, 83, 65); "
            >-</span
        ><span style="color: rgb(141, 106, 76); ">-</span><span style="color: rgb(102, 77, 55); "
            >:</span
        ><span style="color: rgb(53, 40, 28); ">.</span><span style="color: rgb(118, 93, 71); "
            >-</span
        ><span style="color: rgb(212, 162, 120); ">*</span><span style="color: rgb(215, 158, 111); "
            >*</span
        ><span style="color: rgb(82, 62, 48); ">:</span><span style="color: rgb(64, 55, 47); "
            >:</span
        ><span style="color: rgb(71, 53, 40); ">:</span><span style="color: rgb(43, 40, 36); "
            >.</span
        ><span style="color: rgb(59, 50, 42); ">.</span><span style="color: rgb(58, 50, 41); "
            >.</span
        ><span style="color: rgb(59, 52, 44); ">.</span><span style="color: rgb(40, 34, 29); "
            >.</span
        ><span style="color: rgb(34, 35, 32); ">.</span><span style="color: rgb(54, 47, 38); "
            >.</span
        ><span style="color: rgb(57, 50, 41); ">.</span><span style="color: rgb(55, 48, 40); "
            >.</span
        ><span style="color: rgb(36, 36, 32); ">.</span><span style="color: rgb(55, 48, 39); "
            >.</span
        ><span style="color: rgb(56, 50, 41); ">.</span><span style="color: rgb(44, 41, 36); "
            >.</span
        ><span style="color: rgb(35, 35, 32); ">.</span><span style="color: rgb(34, 35, 32); "
            >.</span
        ><span style="color: rgb(36, 35, 34); ">.</span><span style="color: rgb(35, 37, 33); "
            >.</span
        ><span style="color: rgb(35, 36, 34); ">.</span><span style="color: rgb(36, 36, 34); "
            >.</span
        ><span style="color: rgb(36, 38, 35); ">.</span><span style="color: rgb(35, 36, 34); "
            >.</span
        ><span style="color: rgb(35, 37, 34); ">.</span><span style="color: rgb(35, 37, 34); "
            >.</span
        ><span style="color: rgb(35, 36, 35); ">.</span><span style="color: rgb(36, 37, 35); "
            >.</span
        ><span style="color: rgb(58, 60, 56); ">:</span><span style="color: rgb(97, 105, 97); "
            >-</span
        ><span style="color: rgb(99, 106, 100); ">-</span><span style="color: rgb(99, 106, 99); "
            >-</span
        ><span style="color: rgb(101, 107, 100); ">-</span><span style="color: rgb(99, 105, 97); "
            >-</span
        ><span style="color: rgb(79, 88, 86); ">-</span><span style="color: rgb(79, 87, 85); "
            >:</span
        ><span style="color: rgb(79, 88, 86); ">-</span><span style="color: rgb(81, 90, 88); "
            >-</span
        >
<span style="color: rgb(226, 199, 161); ">#</span><span style="color: rgb(227, 199, 159); ">#</span
        ><span style="color: rgb(225, 197, 157); ">#</span><span style="color: rgb(225, 196, 156); "
            >#</span
        ><span style="color: rgb(224, 196, 155); ">#</span><span style="color: rgb(223, 195, 155); "
            >#</span
        ><span style="color: rgb(224, 195, 156); ">#</span><span style="color: rgb(223, 195, 155); "
            >#</span
        ><span style="color: rgb(223, 193, 152); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(223, 193, 153); ">*</span><span style="color: rgb(223, 192, 152); "
            >*</span
        ><span style="color: rgb(141, 121, 95); ">=</span><span style="color: rgb(62, 54, 46); "
            >.</span
        ><span style="color: rgb(59, 51, 43); ">.</span><span style="color: rgb(53, 48, 41); "
            >.</span
        ><span style="color: rgb(58, 51, 43); ">.</span><span style="color: rgb(39, 38, 34); "
            >.</span
        ><span style="color: rgb(40, 38, 35); ">.</span><span style="color: rgb(56, 47, 38); "
            >.</span
        ><span style="color: rgb(224, 169, 125); ">*</span><span style="color: rgb(228, 174, 128); "
            >*</span
        ><span style="color: rgb(95, 76, 60); ">:</span><span style="color: rgb(84, 70, 56); "
            >:</span
        ><span style="color: rgb(229, 177, 133); ">*</span><span style="color: rgb(228, 176, 132); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(229, 176, 131); "
            >*</span
        ><span style="color: rgb(217, 166, 123); ">*</span><span style="color: rgb(81, 61, 44); "
            >:</span
        ><span style="color: rgb(183, 141, 106); ">+</span><span style="color: rgb(72, 57, 46); "
            >:</span
        ><span style="color: rgb(77, 63, 49); ">:</span><span style="color: rgb(118, 94, 73); "
            >-</span
        ><span style="color: rgb(154, 117, 87); ">=</span><span style="color: rgb(227, 175, 131); "
            >*</span
        ><span style="color: rgb(123, 92, 67); ">-</span><span style="color: rgb(228, 175, 131); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(228, 175, 130); "
            >*</span
        ><span style="color: rgb(223, 173, 129); ">*</span><span style="color: rgb(227, 175, 130); "
            >*</span
        ><span style="color: rgb(227, 174, 130); ">*</span><span style="color: rgb(216, 165, 122); "
            >*</span
        ><span style="color: rgb(80, 65, 51); ">:</span><span style="color: rgb(187, 130, 89); "
            >+</span
        ><span style="color: rgb(89, 68, 54); ">:</span><span style="color: rgb(46, 43, 38); "
            >.</span
        ><span style="color: rgb(59, 51, 42); ">.</span><span style="color: rgb(57, 50, 41); "
            >.</span
        ><span style="color: rgb(36, 35, 33); ">.</span><span style="color: rgb(35, 35, 33); "
            >.</span
        ><span style="color: rgb(35, 36, 32); ">.</span><span style="color: rgb(50, 46, 39); "
            >.</span
        ><span style="color: rgb(41, 40, 37); ">.</span><span style="color: rgb(35, 36, 32); "
            >.</span
        ><span style="color: rgb(44, 42, 36); ">.</span><span style="color: rgb(36, 36, 32); "
            >.</span
        ><span style="color: rgb(36, 36, 34); ">.</span><span style="color: rgb(35, 35, 31); "
            >.</span
        ><span style="color: rgb(36, 36, 33); ">.</span><span style="color: rgb(35, 36, 33); "
            >.</span
        ><span style="color: rgb(35, 37, 34); ">.</span><span style="color: rgb(36, 36, 33); "
            >.</span
        ><span style="color: rgb(35, 36, 33); ">.</span><span style="color: rgb(35, 36, 34); "
            >.</span
        ><span style="color: rgb(36, 37, 35); ">.</span><span style="color: rgb(36, 37, 36); "
            >.</span
        ><span style="color: rgb(38, 40, 38); ">.</span><span style="color: rgb(81, 83, 75); "
            >:</span
        ><span style="color: rgb(52, 54, 50); ">.</span><span style="color: rgb(96, 102, 95); "
            >-</span
        ><span style="color: rgb(99, 107, 100); ">-</span><span style="color: rgb(102, 108, 100); "
            >-</span
        ><span style="color: rgb(101, 109, 101); ">-</span><span style="color: rgb(97, 103, 94); "
            >-</span
        ><span style="color: rgb(77, 85, 80); ">:</span><span style="color: rgb(78, 87, 85); "
            >:</span
        ><span style="color: rgb(79, 89, 86); ">-</span><span style="color: rgb(81, 89, 85); "
            >-</span
        >
<span style="color: rgb(227, 199, 160); ">#</span><span style="color: rgb(225, 197, 157); ">#</span
        ><span style="color: rgb(225, 196, 156); ">#</span><span style="color: rgb(224, 196, 156); "
            >#</span
        ><span style="color: rgb(224, 196, 154); ">#</span><span style="color: rgb(224, 195, 154); "
            >#</span
        ><span style="color: rgb(223, 195, 155); ">#</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(222, 194, 152); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(223, 194, 153); ">*</span><span style="color: rgb(223, 193, 151); "
            >*</span
        ><span style="color: rgb(141, 120, 93); ">=</span><span style="color: rgb(76, 65, 54); "
            >:</span
        ><span style="color: rgb(91, 79, 64); ">:</span><span style="color: rgb(43, 42, 37); "
            >.</span
        ><span style="color: rgb(53, 47, 39); ">.</span><span style="color: rgb(43, 41, 36); "
            >.</span
        ><span style="color: rgb(62, 47, 36); ">.</span><span style="color: rgb(92, 71, 54); "
            >:</span
        ><span style="color: rgb(149, 117, 89); ">=</span><span style="color: rgb(150, 114, 85); "
            >=</span
        ><span style="color: rgb(229, 177, 132); ">*</span><span style="color: rgb(155, 123, 94); "
            >=</span
        ><span style="color: rgb(224, 172, 128); ">*</span><span style="color: rgb(229, 178, 134); "
            >*</span
        ><span style="color: rgb(229, 176, 131); ">*</span><span style="color: rgb(229, 177, 132); "
            >*</span
        ><span style="color: rgb(222, 171, 128); ">*</span><span style="color: rgb(211, 162, 121); "
            >*</span
        ><span style="color: rgb(227, 174, 130); ">*</span><span style="color: rgb(225, 170, 126); "
            >*</span
        ><span style="color: rgb(214, 158, 113); ">*</span><span style="color: rgb(227, 175, 130); "
            >*</span
        ><span style="color: rgb(229, 177, 131); ">*</span><span style="color: rgb(205, 157, 115); "
            >+</span
        ><span style="color: rgb(194, 148, 110); ">+</span><span style="color: rgb(214, 165, 122); "
            >*</span
        ><span style="color: rgb(228, 175, 130); ">*</span><span style="color: rgb(228, 175, 130); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(228, 176, 132); "
            >*</span
        ><span style="color: rgb(228, 175, 130); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 173, 128); "
            >*</span
        ><span style="color: rgb(227, 173, 127); ">*</span><span style="color: rgb(202, 145, 102); "
            >+</span
        ><span style="color: rgb(108, 81, 61); ">-</span><span style="color: rgb(48, 44, 39); "
            >.</span
        ><span style="color: rgb(35, 34, 31); ">.</span><span style="color: rgb(36, 35, 32); "
            >.</span
        ><span style="color: rgb(36, 36, 32); ">.</span><span style="color: rgb(36, 36, 34); "
            >.</span
        ><span style="color: rgb(37, 37, 35); ">.</span><span style="color: rgb(37, 37, 34); "
            >.</span
        ><span style="color: rgb(37, 37, 33); ">.</span><span style="color: rgb(39, 38, 34); "
            >.</span
        ><span style="color: rgb(38, 38, 35); ">.</span><span style="color: rgb(38, 37, 35); "
            >.</span
        ><span style="color: rgb(37, 38, 35); ">.</span><span style="color: rgb(36, 37, 35); "
            >.</span
        ><span style="color: rgb(37, 37, 35); ">.</span><span style="color: rgb(37, 36, 36); "
            >.</span
        ><span style="color: rgb(36, 37, 35); ">.</span><span style="color: rgb(37, 37, 34); "
            >.</span
        ><span style="color: rgb(36, 37, 35); ">.</span><span style="color: rgb(36, 37, 35); "
            >.</span
        ><span style="color: rgb(36, 37, 35); ">.</span><span style="color: rgb(81, 85, 77); "
            >:</span
        ><span style="color: rgb(95, 99, 91); ">-</span><span style="color: rgb(98, 106, 100); "
            >-</span
        ><span style="color: rgb(100, 107, 99); ">-</span><span style="color: rgb(102, 108, 101); "
            >-</span
        ><span style="color: rgb(103, 108, 99); ">-</span><span style="color: rgb(98, 102, 93); "
            >-</span
        ><span style="color: rgb(78, 87, 83); ">:</span><span style="color: rgb(78, 88, 85); "
            >-</span
        ><span style="color: rgb(79, 89, 85); ">-</span><span style="color: rgb(82, 90, 87); "
            >-</span
        >
<span style="color: rgb(226, 198, 158); ">#</span><span style="color: rgb(225, 197, 156); ">#</span
        ><span style="color: rgb(224, 196, 156); ">#</span><span style="color: rgb(224, 196, 156); "
            >#</span
        ><span style="color: rgb(223, 195, 154); ">#</span><span style="color: rgb(224, 194, 154); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(224, 194, 153); "
            >*</span
        ><span style="color: rgb(223, 193, 153); ">*</span><span style="color: rgb(223, 193, 151); "
            >*</span
        ><span style="color: rgb(179, 155, 120); ">+</span><span style="color: rgb(222, 192, 147); "
            >*</span
        ><span style="color: rgb(124, 105, 82); ">-</span><span style="color: rgb(52, 47, 41); "
            >.</span
        ><span style="color: rgb(40, 39, 35); ">.</span><span style="color: rgb(40, 39, 35); "
            >.</span
        ><span style="color: rgb(55, 44, 35); ">.</span><span style="color: rgb(223, 172, 129); "
            >*</span
        ><span style="color: rgb(228, 176, 132); ">*</span><span style="color: rgb(228, 176, 132); "
            >*</span
        ><span style="color: rgb(229, 178, 134); ">*</span><span style="color: rgb(218, 169, 126); "
            >*</span
        ><span style="color: rgb(230, 178, 133); ">*</span><span style="color: rgb(228, 177, 133); "
            >*</span
        ><span style="color: rgb(228, 176, 132); ">*</span><span style="color: rgb(229, 177, 133); "
            >*</span
        ><span style="color: rgb(229, 178, 133); ">*</span><span style="color: rgb(229, 176, 132); "
            >*</span
        ><span style="color: rgb(217, 162, 116); ">*</span><span style="color: rgb(202, 143, 96); "
            >+</span
        ><span style="color: rgb(228, 176, 130); ">*</span><span style="color: rgb(102, 79, 58); "
            >:</span
        ><span style="color: rgb(57, 48, 39); ">.</span><span style="color: rgb(66, 58, 51); "
            >:</span
        ><span style="color: rgb(146, 135, 122); ">=</span><span style="color: rgb(149, 139, 126); "
            >=</span
        ><span style="color: rgb(130, 117, 104); ">=</span><span style="color: rgb(94, 78, 62); "
            >:</span
        ><span style="color: rgb(136, 106, 80); ">-</span><span style="color: rgb(228, 175, 130); "
            >*</span
        ><span style="color: rgb(228, 175, 130); ">*</span><span style="color: rgb(228, 175, 131); "
            >*</span
        ><span style="color: rgb(228, 175, 131); ">*</span><span style="color: rgb(227, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 174, 130); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(226, 173, 127); ">*</span><span style="color: rgb(219, 164, 119); "
            >*</span
        ><span style="color: rgb(38, 35, 32); ">.</span><span style="color: rgb(37, 38, 34); "
            >.</span
        ><span style="color: rgb(37, 36, 34); ">.</span><span style="color: rgb(38, 38, 34); "
            >.</span
        ><span style="color: rgb(39, 38, 35); ">.</span><span style="color: rgb(45, 42, 36); "
            >.</span
        ><span style="color: rgb(161, 127, 96); ">=</span><span style="color: rgb(182, 139, 103); "
            >+</span
        ><span style="color: rgb(216, 164, 121); ">*</span><span style="color: rgb(189, 144, 106); "
            >+</span
        ><span style="color: rgb(135, 107, 83); ">-</span><span style="color: rgb(41, 40, 37); "
            >.</span
        ><span style="color: rgb(39, 40, 37); ">.</span><span style="color: rgb(38, 39, 36); "
            >.</span
        ><span style="color: rgb(37, 38, 35); ">.</span><span style="color: rgb(37, 38, 36); "
            >.</span
        ><span style="color: rgb(38, 39, 36); ">.</span><span style="color: rgb(37, 38, 35); "
            >.</span
        ><span style="color: rgb(37, 37, 33); ">.</span><span style="color: rgb(80, 82, 73); "
            >:</span
        ><span style="color: rgb(102, 105, 96); ">-</span><span style="color: rgb(101, 106, 97); "
            >-</span
        ><span style="color: rgb(102, 109, 100); ">-</span><span style="color: rgb(102, 108, 100); "
            >-</span
        ><span style="color: rgb(103, 109, 99); ">-</span><span style="color: rgb(96, 101, 93); "
            >-</span
        ><span style="color: rgb(77, 86, 83); ">:</span><span style="color: rgb(78, 88, 85); "
            >-</span
        ><span style="color: rgb(80, 88, 85); ">-</span><span style="color: rgb(82, 89, 84); "
            >-</span
        >
<span style="color: rgb(226, 198, 159); ">#</span><span style="color: rgb(225, 197, 156); ">#</span
        ><span style="color: rgb(225, 196, 156); ">#</span><span style="color: rgb(224, 195, 154); "
            >#</span
        ><span style="color: rgb(224, 195, 154); ">#</span><span style="color: rgb(223, 195, 154); "
            >#</span
        ><span style="color: rgb(222, 194, 153); ">*</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(225, 196, 155); ">#</span><span style="color: rgb(223, 194, 152); "
            >*</span
        ><span style="color: rgb(223, 194, 152); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(223, 194, 152); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(223, 193, 151); ">*</span><span style="color: rgb(105, 92, 72); "
            >-</span
        ><span style="color: rgb(138, 127, 102); ">=</span><span style="color: rgb(48, 44, 39); "
            >.</span
        ><span style="color: rgb(55, 50, 42); ">.</span><span style="color: rgb(198, 153, 114); "
            >+</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(226, 173, 130); "
            >*</span
        ><span style="color: rgb(173, 133, 98); ">=</span><span style="color: rgb(213, 164, 123); "
            >*</span
        ><span style="color: rgb(211, 163, 121); ">*</span><span style="color: rgb(228, 177, 133); "
            >*</span
        ><span style="color: rgb(228, 176, 132); ">*</span><span style="color: rgb(229, 177, 133); "
            >*</span
        ><span style="color: rgb(229, 178, 134); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(229, 175, 130); "
            >*</span
        ><span style="color: rgb(221, 169, 126); ">*</span><span style="color: rgb(212, 171, 136); "
            >*</span
        ><span style="color: rgb(75, 62, 50); ">:</span><span style="color: rgb(93, 81, 70); "
            >:</span
        ><span style="color: rgb(226, 206, 184); ">#</span><span style="color: rgb(223, 203, 181); "
            >#</span
        ><span style="color: rgb(224, 203, 181); ">#</span><span style="color: rgb(223, 203, 183); "
            >#</span
        ><span style="color: rgb(220, 191, 164); ">*</span><span style="color: rgb(227, 174, 130); "
            >*</span
        ><span style="color: rgb(228, 175, 130); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(227, 174, 129); ">*</span><span style="color: rgb(227, 175, 130); "
            >*</span
        ><span style="color: rgb(226, 173, 127); ">*</span><span style="color: rgb(226, 173, 127); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(226, 172, 125); "
            >*</span
        ><span style="color: rgb(57, 44, 35); ">.</span><span style="color: rgb(37, 37, 34); "
            >.</span
        ><span style="color: rgb(39, 38, 34); ">.</span><span style="color: rgb(44, 42, 37); "
            >.</span
        ><span style="color: rgb(142, 100, 69); ">-</span><span style="color: rgb(226, 172, 126); "
            >*</span
        ><span style="color: rgb(226, 172, 126); ">*</span><span style="color: rgb(180, 134, 96); "
            >+</span
        ><span style="color: rgb(196, 138, 93); ">+</span><span style="color: rgb(195, 136, 92); "
            >+</span
        ><span style="color: rgb(187, 129, 85); ">=</span><span style="color: rgb(188, 132, 88); "
            >+</span
        ><span style="color: rgb(38, 35, 30); ">.</span><span style="color: rgb(38, 39, 35); "
            >.</span
        ><span style="color: rgb(38, 39, 36); ">.</span><span style="color: rgb(39, 39, 36); "
            >.</span
        ><span style="color: rgb(39, 39, 35); ">.</span><span style="color: rgb(39, 39, 36); "
            >.</span
        ><span style="color: rgb(44, 45, 40); ">.</span><span style="color: rgb(98, 101, 89); "
            >-</span
        ><span style="color: rgb(103, 107, 96); ">-</span><span style="color: rgb(102, 108, 100); "
            >-</span
        ><span style="color: rgb(104, 108, 98); ">-</span><span style="color: rgb(104, 111, 102); "
            >-</span
        ><span style="color: rgb(105, 110, 99); ">-</span><span style="color: rgb(97, 102, 93); "
            >-</span
        ><span style="color: rgb(76, 86, 83); ">:</span><span style="color: rgb(78, 88, 86); "
            >-</span
        ><span style="color: rgb(79, 87, 84); ">:</span><span style="color: rgb(81, 89, 85); "
            >-</span
        >
<span style="color: rgb(226, 199, 158); ">#</span><span style="color: rgb(225, 196, 157); ">#</span
        ><span style="color: rgb(225, 197, 157); ">#</span><span style="color: rgb(223, 196, 155); "
            >#</span
        ><span style="color: rgb(224, 195, 154); ">#</span><span style="color: rgb(223, 195, 153); "
            >#</span
        ><span style="color: rgb(224, 196, 156); ">#</span><span style="color: rgb(224, 195, 155); "
            >#</span
        ><span style="color: rgb(222, 194, 152); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(225, 196, 157); "
            >#</span
        ><span style="color: rgb(223, 194, 153); ">*</span><span style="color: rgb(224, 196, 157); "
            >#</span
        ><span style="color: rgb(224, 195, 155); ">#</span><span style="color: rgb(225, 196, 155); "
            >#</span
        ><span style="color: rgb(155, 140, 113); ">=</span><span style="color: rgb(144, 135, 110); "
            >=</span
        ><span style="color: rgb(55, 52, 45); ">.</span><span style="color: rgb(49, 42, 33); "
            >.</span
        ><span style="color: rgb(188, 144, 105); ">+</span><span style="color: rgb(185, 166, 147); "
            >*</span
        ><span style="color: rgb(49, 40, 31); ">.</span><span style="color: rgb(147, 132, 115); "
            >=</span
        ><span style="color: rgb(203, 184, 166); ">*</span><span style="color: rgb(220, 169, 125); "
            >*</span
        ><span style="color: rgb(226, 174, 128); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(228, 175, 130); ">*</span><span style="color: rgb(229, 175, 131); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(229, 176, 132); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(217, 168, 124); "
            >*</span
        ><span style="color: rgb(108, 89, 73); ">-</span><span style="color: rgb(95, 75, 62); "
            >:</span
        ><span style="color: rgb(216, 195, 174); ">#</span><span style="color: rgb(224, 203, 182); "
            >#</span
        ><span style="color: rgb(225, 203, 181); ">#</span><span style="color: rgb(224, 201, 178); "
            >#</span
        ><span style="color: rgb(228, 174, 129); ">*</span><span style="color: rgb(228, 174, 128); "
            >*</span
        ><span style="color: rgb(227, 175, 130); ">*</span><span style="color: rgb(227, 175, 131); "
            >*</span
        ><span style="color: rgb(227, 174, 129); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(226, 175, 130); ">*</span><span style="color: rgb(227, 173, 128); "
            >*</span
        ><span style="color: rgb(227, 174, 127); ">*</span><span style="color: rgb(226, 171, 124); "
            >*</span
        ><span style="color: rgb(147, 115, 85); ">=</span><span style="color: rgb(54, 41, 30); "
            >.</span
        ><span style="color: rgb(42, 41, 36); ">.</span><span style="color: rgb(65, 54, 44); "
            >.</span
        ><span style="color: rgb(195, 136, 89); ">+</span><span style="color: rgb(211, 156, 111); "
            >+</span
        ><span style="color: rgb(168, 116, 77); ">=</span><span style="color: rgb(160, 112, 75); "
            >=</span
        ><span style="color: rgb(184, 127, 85); ">=</span><span style="color: rgb(191, 133, 89); "
            >+</span
        ><span style="color: rgb(180, 125, 82); ">=</span><span style="color: rgb(188, 132, 88); "
            >+</span
        ><span style="color: rgb(120, 90, 65); ">-</span><span style="color: rgb(40, 39, 35); "
            >.</span
        ><span style="color: rgb(40, 40, 34); ">.</span><span style="color: rgb(41, 41, 36); "
            >.</span
        ><span style="color: rgb(41, 40, 37); ">.</span><span style="color: rgb(45, 42, 37); "
            >.</span
        ><span style="color: rgb(61, 58, 50); ">:</span><span style="color: rgb(104, 108, 96); "
            >-</span
        ><span style="color: rgb(103, 107, 96); ">-</span><span style="color: rgb(103, 108, 98); "
            >-</span
        ><span style="color: rgb(103, 108, 99); ">-</span><span style="color: rgb(103, 109, 99); "
            >-</span
        ><span style="color: rgb(105, 109, 100); ">-</span><span style="color: rgb(98, 102, 91); "
            >-</span
        ><span style="color: rgb(77, 87, 85); ">:</span><span style="color: rgb(78, 87, 85); "
            >:</span
        ><span style="color: rgb(80, 88, 85); ">-</span><span style="color: rgb(80, 89, 86); "
            >-</span
        >
<span style="color: rgb(226, 197, 157); ">#</span><span style="color: rgb(224, 196, 155); ">#</span
        ><span style="color: rgb(224, 196, 155); ">#</span><span style="color: rgb(224, 195, 154); "
            >#</span
        ><span style="color: rgb(223, 195, 155); ">#</span><span style="color: rgb(224, 195, 155); "
            >#</span
        ><span style="color: rgb(223, 195, 154); ">#</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(223, 194, 153); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(222, 194, 153); ">*</span><span style="color: rgb(223, 195, 157); "
            >#</span
        ><span style="color: rgb(224, 196, 155); ">#</span><span style="color: rgb(223, 194, 155); "
            >*</span
        ><span style="color: rgb(224, 195, 155); ">#</span><span style="color: rgb(225, 197, 157); "
            >#</span
        ><span style="color: rgb(156, 144, 118); ">+</span><span style="color: rgb(142, 133, 109); "
            >=</span
        ><span style="color: rgb(141, 132, 109); ">=</span><span style="color: rgb(127, 117, 96); "
            >=</span
        ><span style="color: rgb(118, 100, 80); ">-</span><span style="color: rgb(227, 176, 133); "
            >*</span
        ><span style="color: rgb(92, 75, 60); ">:</span><span style="color: rgb(104, 85, 70); "
            >-</span
        ><span style="color: rgb(224, 203, 181); ">#</span><span style="color: rgb(207, 157, 115); "
            >+</span
        ><span style="color: rgb(221, 170, 127); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(228, 174, 129); ">*</span><span style="color: rgb(228, 175, 131); "
            >*</span
        ><span style="color: rgb(229, 177, 133); ">*</span><span style="color: rgb(228, 175, 129); "
            >*</span
        ><span style="color: rgb(228, 177, 132); ">*</span><span style="color: rgb(227, 177, 132); "
            >*</span
        ><span style="color: rgb(229, 192, 158); ">#</span><span style="color: rgb(201, 172, 144); "
            >*</span
        ><span style="color: rgb(224, 195, 166); ">#</span><span style="color: rgb(200, 158, 121); "
            >+</span
        ><span style="color: rgb(227, 174, 129); ">*</span><span style="color: rgb(228, 175, 130); "
            >*</span
        ><span style="color: rgb(228, 175, 131); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 174, 129); ">*</span><span style="color: rgb(227, 173, 127); "
            >*</span
        ><span style="color: rgb(227, 174, 127); ">*</span><span style="color: rgb(227, 173, 127); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 172, 126); "
            >*</span
        ><span style="color: rgb(171, 132, 99); ">=</span><span style="color: rgb(181, 129, 89); "
            >=</span
        ><span style="color: rgb(45, 41, 36); ">.</span><span style="color: rgb(194, 136, 91); "
            >+</span
        ><span style="color: rgb(191, 133, 88); ">+</span><span style="color: rgb(145, 99, 65); "
            >-</span
        ><span style="color: rgb(191, 135, 92); ">+</span><span style="color: rgb(191, 132, 88); "
            >+</span
        ><span style="color: rgb(195, 137, 92); ">+</span><span style="color: rgb(192, 136, 92); "
            >+</span
        ><span style="color: rgb(191, 134, 90); ">+</span><span style="color: rgb(189, 133, 89); "
            >+</span
        ><span style="color: rgb(121, 91, 66); ">-</span><span style="color: rgb(42, 41, 37); "
            >.</span
        ><span style="color: rgb(43, 42, 39); ">.</span><span style="color: rgb(43, 42, 38); "
            >.</span
        ><span style="color: rgb(49, 46, 39); ">.</span><span style="color: rgb(88, 87, 75); "
            >-</span
        ><span style="color: rgb(107, 108, 94); ">-</span><span style="color: rgb(106, 110, 98); "
            >-</span
        ><span style="color: rgb(103, 109, 100); ">-</span><span style="color: rgb(104, 109, 99); "
            >-</span
        ><span style="color: rgb(104, 108, 100); ">-</span><span style="color: rgb(104, 110, 100); "
            >-</span
        ><span style="color: rgb(106, 111, 100); ">-</span><span style="color: rgb(98, 102, 93); "
            >-</span
        ><span style="color: rgb(77, 85, 83); ">:</span><span style="color: rgb(78, 87, 85); "
            >:</span
        ><span style="color: rgb(78, 87, 85); ">:</span><span style="color: rgb(80, 90, 86); "
            >-</span
        >
<span style="color: rgb(225, 197, 157); ">#</span><span style="color: rgb(224, 196, 156); ">#</span
        ><span style="color: rgb(224, 195, 155); ">#</span><span style="color: rgb(223, 195, 155); "
            >#</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(222, 194, 153); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(222, 193, 152); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(223, 193, 153); "
            >*</span
        ><span style="color: rgb(223, 195, 155); ">#</span><span style="color: rgb(223, 195, 155); "
            >#</span
        ><span style="color: rgb(223, 195, 155); ">#</span><span style="color: rgb(225, 196, 156); "
            >#</span
        ><span style="color: rgb(155, 143, 118); ">+</span><span style="color: rgb(142, 133, 109); "
            >=</span
        ><span style="color: rgb(139, 131, 108); ">=</span><span style="color: rgb(138, 130, 107); "
            >=</span
        ><span style="color: rgb(129, 119, 97); ">=</span><span style="color: rgb(216, 167, 126); "
            >*</span
        ><span style="color: rgb(221, 178, 139); ">*</span><span style="color: rgb(207, 175, 142); "
            >*</span
        ><span style="color: rgb(206, 163, 123); ">*</span><span style="color: rgb(200, 151, 112); "
            >+</span
        ><span style="color: rgb(228, 176, 130); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 177, 132); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(228, 176, 130); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(229, 176, 131); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(228, 175, 129); "
            >*</span
        ><span style="color: rgb(228, 175, 132); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(228, 175, 129); ">*</span><span style="color: rgb(217, 165, 120); "
            >*</span
        ><span style="color: rgb(227, 174, 129); ">*</span><span style="color: rgb(227, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(227, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 176, 129); ">*</span><span style="color: rgb(227, 175, 130); "
            >*</span
        ><span style="color: rgb(227, 175, 130); ">*</span><span style="color: rgb(226, 173, 126); "
            >*</span
        ><span style="color: rgb(226, 172, 126); ">*</span><span style="color: rgb(222, 166, 118); "
            >*</span
        ><span style="color: rgb(194, 137, 92); ">+</span><span style="color: rgb(191, 134, 89); "
            >+</span
        ><span style="color: rgb(177, 124, 84); ">=</span><span style="color: rgb(191, 135, 92); "
            >+</span
        ><span style="color: rgb(191, 135, 90); ">+</span><span style="color: rgb(174, 122, 80); "
            >=</span
        ><span style="color: rgb(184, 129, 87); ">=</span><span style="color: rgb(191, 133, 88); "
            >+</span
        ><span style="color: rgb(193, 136, 91); ">+</span><span style="color: rgb(191, 134, 89); "
            >+</span
        ><span style="color: rgb(191, 134, 90); ">+</span><span style="color: rgb(191, 134, 91); "
            >+</span
        ><span style="color: rgb(59, 48, 39); ">.</span><span style="color: rgb(44, 43, 39); "
            >.</span
        ><span style="color: rgb(41, 39, 34); ">.</span><span style="color: rgb(55, 54, 47); "
            >.</span
        ><span style="color: rgb(108, 108, 93); ">-</span><span style="color: rgb(108, 109, 96); "
            >-</span
        ><span style="color: rgb(106, 109, 97); ">-</span><span style="color: rgb(106, 109, 97); "
            >-</span
        ><span style="color: rgb(105, 109, 98); ">-</span><span style="color: rgb(104, 109, 98); "
            >-</span
        ><span style="color: rgb(103, 108, 99); ">-</span><span style="color: rgb(104, 109, 100); "
            >-</span
        ><span style="color: rgb(106, 110, 100); ">-</span><span style="color: rgb(97, 101, 92); "
            >-</span
        ><span style="color: rgb(76, 85, 83); ">:</span><span style="color: rgb(77, 86, 83); "
            >:</span
        ><span style="color: rgb(79, 87, 85); ">:</span><span style="color: rgb(81, 89, 86); "
            >-</span
        >
<span style="color: rgb(225, 198, 158); ">#</span><span style="color: rgb(224, 195, 155); ">#</span
        ><span style="color: rgb(224, 196, 155); ">#</span><span style="color: rgb(224, 195, 156); "
            >#</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(222, 194, 153); ">*</span><span style="color: rgb(222, 193, 152); "
            >*</span
        ><span style="color: rgb(222, 193, 152); ">*</span><span style="color: rgb(223, 193, 152); "
            >*</span
        ><span style="color: rgb(222, 193, 152); ">*</span><span style="color: rgb(223, 195, 154); "
            >#</span
        ><span style="color: rgb(223, 194, 153); ">*</span><span style="color: rgb(223, 195, 155); "
            >#</span
        ><span style="color: rgb(223, 194, 153); ">*</span><span style="color: rgb(224, 196, 157); "
            >#</span
        ><span style="color: rgb(156, 144, 119); ">+</span><span style="color: rgb(142, 132, 109); "
            >=</span
        ><span style="color: rgb(139, 132, 108); ">=</span><span style="color: rgb(139, 130, 106); "
            >=</span
        ><span style="color: rgb(129, 117, 95); ">=</span><span style="color: rgb(215, 166, 125); "
            >*</span
        ><span style="color: rgb(228, 176, 132); ">*</span><span style="color: rgb(225, 172, 128); "
            >*</span
        ><span style="color: rgb(221, 169, 126); ">*</span><span style="color: rgb(227, 176, 132); "
            >*</span
        ><span style="color: rgb(229, 178, 134); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(227, 175, 131); "
            >*</span
        ><span style="color: rgb(229, 177, 132); ">*</span><span style="color: rgb(228, 175, 131); "
            >*</span
        ><span style="color: rgb(228, 175, 130); ">*</span><span style="color: rgb(228, 175, 130); "
            >*</span
        ><span style="color: rgb(228, 175, 130); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 175, 130); "
            >*</span
        ><span style="color: rgb(226, 173, 128); ">*</span><span style="color: rgb(228, 176, 132); "
            >*</span
        ><span style="color: rgb(228, 175, 129); ">*</span><span style="color: rgb(228, 175, 130); "
            >*</span
        ><span style="color: rgb(227, 173, 128); ">*</span><span style="color: rgb(226, 174, 127); "
            >*</span
        ><span style="color: rgb(227, 173, 128); ">*</span><span style="color: rgb(226, 172, 126); "
            >*</span
        ><span style="color: rgb(213, 158, 110); ">+</span><span style="color: rgb(192, 135, 90); "
            >+</span
        ><span style="color: rgb(191, 134, 89); ">+</span><span style="color: rgb(190, 134, 89); "
            >+</span
        ><span style="color: rgb(191, 135, 90); ">+</span><span style="color: rgb(190, 135, 90); "
            >+</span
        ><span style="color: rgb(185, 129, 86); ">=</span><span style="color: rgb(192, 135, 90); "
            >+</span
        ><span style="color: rgb(190, 133, 89); ">+</span><span style="color: rgb(175, 124, 83); "
            >=</span
        ><span style="color: rgb(191, 135, 91); ">+</span><span style="color: rgb(190, 133, 89); "
            >+</span
        ><span style="color: rgb(191, 134, 89); ">+</span><span style="color: rgb(80, 62, 48); "
            >:</span
        ><span style="color: rgb(46, 44, 40); ">.</span><span style="color: rgb(47, 46, 41); "
            >.</span
        ><span style="color: rgb(74, 70, 60); ">:</span><span style="color: rgb(111, 111, 96); "
            >-</span
        ><span style="color: rgb(110, 112, 99); ">-</span><span style="color: rgb(110, 111, 97); "
            >-</span
        ><span style="color: rgb(109, 109, 95); ">-</span><span style="color: rgb(107, 110, 98); "
            >-</span
        ><span style="color: rgb(106, 110, 99); ">-</span><span style="color: rgb(104, 110, 101); "
            >-</span
        ><span style="color: rgb(103, 108, 100); ">-</span><span style="color: rgb(104, 109, 100); "
            >-</span
        ><span style="color: rgb(104, 110, 101); ">-</span><span style="color: rgb(96, 101, 92); "
            >-</span
        ><span style="color: rgb(76, 85, 84); ">:</span><span style="color: rgb(78, 87, 85); "
            >:</span
        ><span style="color: rgb(79, 88, 87); ">-</span><span style="color: rgb(81, 89, 85); "
            >-</span
        >
<span style="color: rgb(224, 196, 156); ">#</span><span style="color: rgb(223, 196, 155); ">#</span
        ><span style="color: rgb(224, 195, 156); ">#</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(223, 195, 155); ">#</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(223, 195, 154); ">#</span><span style="color: rgb(223, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 194, 153); ">*</span><span style="color: rgb(223, 193, 152); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(222, 193, 152); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(223, 194, 155); ">*</span><span style="color: rgb(226, 197, 157); "
            >#</span
        ><span style="color: rgb(155, 143, 117); ">+</span><span style="color: rgb(141, 133, 109); "
            >=</span
        ><span style="color: rgb(140, 131, 108); ">=</span><span style="color: rgb(139, 130, 108); "
            >=</span
        ><span style="color: rgb(131, 118, 94); ">=</span><span style="color: rgb(212, 163, 119); "
            >*</span
        ><span style="color: rgb(224, 172, 128); ">*</span><span style="color: rgb(212, 164, 123); "
            >*</span
        ><span style="color: rgb(230, 179, 134); ">*</span><span style="color: rgb(220, 171, 127); "
            >*</span
        ><span style="color: rgb(191, 146, 109); ">+</span><span style="color: rgb(230, 178, 133); "
            >*</span
        ><span style="color: rgb(227, 176, 130); ">*</span><span style="color: rgb(227, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 175, 129); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(227, 175, 129); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(228, 175, 132); ">*</span><span style="color: rgb(227, 174, 129); "
            >*</span
        ><span style="color: rgb(227, 175, 128); ">*</span><span style="color: rgb(227, 174, 129); "
            >*</span
        ><span style="color: rgb(227, 174, 129); ">*</span><span style="color: rgb(227, 173, 128); "
            >*</span
        ><span style="color: rgb(227, 175, 130); ">*</span><span style="color: rgb(227, 174, 127); "
            >*</span
        ><span style="color: rgb(227, 175, 129); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(227, 175, 127); ">*</span><span style="color: rgb(214, 158, 113); "
            >*</span
        ><span style="color: rgb(192, 136, 90); ">+</span><span style="color: rgb(191, 135, 90); "
            >+</span
        ><span style="color: rgb(191, 134, 89); ">+</span><span style="color: rgb(192, 137, 94); "
            >+</span
        ><span style="color: rgb(191, 135, 90); ">+</span><span style="color: rgb(191, 136, 91); "
            >+</span
        ><span style="color: rgb(191, 133, 88); ">+</span><span style="color: rgb(186, 130, 87); "
            >+</span
        ><span style="color: rgb(191, 136, 92); ">+</span><span style="color: rgb(192, 135, 91); "
            >+</span
        ><span style="color: rgb(192, 135, 90); ">+</span><span style="color: rgb(185, 131, 90); "
            >+</span
        ><span style="color: rgb(53, 48, 41); ">.</span><span style="color: rgb(47, 46, 40); "
            >.</span
        ><span style="color: rgb(73, 71, 61); ">:</span><span style="color: rgb(113, 112, 97); "
            >-</span
        ><span style="color: rgb(112, 111, 96); ">-</span><span style="color: rgb(112, 112, 98); "
            >-</span
        ><span style="color: rgb(112, 112, 99); ">-</span><span style="color: rgb(110, 112, 99); "
            >-</span
        ><span style="color: rgb(110, 112, 99); ">-</span><span style="color: rgb(106, 111, 100); "
            >-</span
        ><span style="color: rgb(105, 109, 99); ">-</span><span style="color: rgb(104, 110, 102); "
            >-</span
        ><span style="color: rgb(104, 109, 99); ">-</span><span style="color: rgb(104, 109, 98); "
            >-</span
        ><span style="color: rgb(106, 109, 98); ">-</span><span style="color: rgb(95, 100, 91); "
            >-</span
        ><span style="color: rgb(76, 84, 82); ">:</span><span style="color: rgb(78, 87, 85); "
            >:</span
        ><span style="color: rgb(80, 87, 84); ">-</span><span style="color: rgb(81, 89, 84); "
            >-</span
        >
<span style="color: rgb(225, 196, 156); ">#</span><span style="color: rgb(224, 195, 154); ">#</span
        ><span style="color: rgb(223, 195, 154); ">#</span><span style="color: rgb(223, 194, 152); "
            >*</span
        ><span style="color: rgb(222, 194, 154); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(222, 194, 152); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 193, 151); ">*</span><span style="color: rgb(222, 192, 151); "
            >*</span
        ><span style="color: rgb(222, 193, 152); ">*</span><span style="color: rgb(222, 193, 151); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(223, 195, 154); "
            >#</span
        ><span style="color: rgb(224, 196, 156); ">#</span><span style="color: rgb(224, 195, 154); "
            >#</span
        ><span style="color: rgb(154, 142, 116); ">+</span><span style="color: rgb(141, 132, 110); "
            >=</span
        ><span style="color: rgb(137, 131, 110); ">=</span><span style="color: rgb(138, 130, 108); "
            >=</span
        ><span style="color: rgb(127, 117, 96); ">=</span><span style="color: rgb(214, 166, 124); "
            >*</span
        ><span style="color: rgb(228, 177, 132); ">*</span><span style="color: rgb(228, 178, 133); "
            >*</span
        ><span style="color: rgb(227, 175, 130); ">*</span><span style="color: rgb(192, 144, 104); "
            >+</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 175, 129); ">*</span><span style="color: rgb(228, 176, 132); "
            >*</span
        ><span style="color: rgb(227, 175, 130); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(228, 175, 130); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 176, 130); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(227, 173, 129); ">*</span><span style="color: rgb(229, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 174, 127); ">*</span><span style="color: rgb(227, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 173, 127); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(212, 157, 113); ">+</span><span style="color: rgb(226, 174, 128); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(226, 173, 127); "
            >*</span
        ><span style="color: rgb(226, 172, 124); ">*</span><span style="color: rgb(203, 149, 102); "
            >+</span
        ><span style="color: rgb(192, 138, 95); ">+</span><span style="color: rgb(193, 138, 94); "
            >+</span
        ><span style="color: rgb(191, 135, 89); ">+</span><span style="color: rgb(190, 133, 87); "
            >+</span
        ><span style="color: rgb(190, 135, 90); ">+</span><span style="color: rgb(190, 132, 87); "
            >+</span
        ><span style="color: rgb(190, 134, 89); ">+</span><span style="color: rgb(190, 133, 88); "
            >+</span
        ><span style="color: rgb(191, 136, 92); ">+</span><span style="color: rgb(171, 121, 82); "
            >=</span
        ><span style="color: rgb(49, 46, 41); ">.</span><span style="color: rgb(45, 44, 37); "
            >.</span
        ><span style="color: rgb(46, 45, 40); ">.</span><span style="color: rgb(103, 100, 87); "
            >-</span
        ><span style="color: rgb(115, 113, 96); ">-</span><span style="color: rgb(115, 114, 98); "
            >-</span
        ><span style="color: rgb(113, 114, 101); ">-</span><span style="color: rgb(112, 114, 100); "
            >-</span
        ><span style="color: rgb(111, 114, 101); ">-</span><span style="color: rgb(110, 112, 100); "
            >-</span
        ><span style="color: rgb(108, 112, 102); ">-</span><span style="color: rgb(105, 108, 97); "
            >-</span
        ><span style="color: rgb(104, 109, 99); ">-</span><span style="color: rgb(103, 109, 100); "
            >-</span
        ><span style="color: rgb(103, 108, 100); ">-</span><span style="color: rgb(103, 109, 102); "
            >-</span
        ><span style="color: rgb(104, 109, 99); ">-</span><span style="color: rgb(95, 100, 93); "
            >-</span
        ><span style="color: rgb(76, 85, 82); ">:</span><span style="color: rgb(78, 87, 83); "
            >:</span
        ><span style="color: rgb(78, 87, 84); ">:</span><span style="color: rgb(81, 89, 86); "
            >-</span
        >
<span style="color: rgb(225, 197, 156); ">#</span><span style="color: rgb(224, 196, 156); ">#</span
        ><span style="color: rgb(223, 194, 155); ">*</span><span style="color: rgb(223, 195, 154); "
            >#</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(223, 193, 153); ">*</span><span style="color: rgb(222, 194, 153); "
            >*</span
        ><span style="color: rgb(222, 194, 153); ">*</span><span style="color: rgb(223, 194, 153); "
            >*</span
        ><span style="color: rgb(223, 194, 153); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 194, 154); ">*</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(224, 195, 155); "
            >#</span
        ><span style="color: rgb(151, 140, 117); ">=</span><span style="color: rgb(139, 132, 110); "
            >=</span
        ><span style="color: rgb(139, 131, 109); ">=</span><span style="color: rgb(138, 130, 108); "
            >=</span
        ><span style="color: rgb(137, 130, 109); ">=</span><span style="color: rgb(199, 156, 117); "
            >+</span
        ><span style="color: rgb(228, 177, 133); ">*</span><span style="color: rgb(228, 175, 129); "
            >*</span
        ><span style="color: rgb(228, 177, 131); ">*</span><span style="color: rgb(228, 177, 132); "
            >*</span
        ><span style="color: rgb(228, 174, 128); ">*</span><span style="color: rgb(228, 177, 131); "
            >*</span
        ><span style="color: rgb(229, 177, 131); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(228, 175, 130); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(228, 177, 131); ">*</span><span style="color: rgb(227, 175, 130); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(228, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 175, 129); ">*</span><span style="color: rgb(228, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 173, 127); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(221, 167, 121); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(226, 173, 127); ">*</span><span style="color: rgb(226, 173, 125); "
            >*</span
        ><span style="color: rgb(225, 172, 126); ">*</span><span style="color: rgb(192, 137, 92); "
            >+</span
        ><span style="color: rgb(191, 134, 90); ">+</span><span style="color: rgb(191, 134, 90); "
            >+</span
        ><span style="color: rgb(190, 135, 90); ">+</span><span style="color: rgb(191, 135, 89); "
            >+</span
        ><span style="color: rgb(171, 117, 77); ">=</span><span style="color: rgb(160, 107, 69); "
            >=</span
        ><span style="color: rgb(64, 49, 37); ">.</span><span style="color: rgb(45, 42, 36); "
            >.</span
        ><span style="color: rgb(44, 43, 37); ">.</span><span style="color: rgb(46, 44, 39); "
            >.</span
        ><span style="color: rgb(47, 44, 39); ">.</span><span style="color: rgb(47, 46, 41); "
            >.</span
        ><span style="color: rgb(97, 92, 78); ">-</span><span style="color: rgb(116, 114, 97); "
            >-</span
        ><span style="color: rgb(115, 114, 98); ">-</span><span style="color: rgb(114, 112, 97); "
            >-</span
        ><span style="color: rgb(114, 114, 100); ">-</span><span style="color: rgb(112, 112, 98); "
            >-</span
        ><span style="color: rgb(111, 111, 97); ">-</span><span style="color: rgb(109, 112, 100); "
            >-</span
        ><span style="color: rgb(107, 111, 100); ">-</span><span style="color: rgb(105, 110, 99); "
            >-</span
        ><span style="color: rgb(104, 108, 98); ">-</span><span style="color: rgb(103, 109, 103); "
            >-</span
        ><span style="color: rgb(102, 108, 100); ">-</span><span style="color: rgb(102, 107, 99); "
            >-</span
        ><span style="color: rgb(105, 110, 101); ">-</span><span style="color: rgb(94, 99, 91); "
            >-</span
        ><span style="color: rgb(74, 84, 82); ">:</span><span style="color: rgb(77, 87, 84); "
            >:</span
        ><span style="color: rgb(81, 89, 85); ">-</span><span style="color: rgb(82, 90, 86); "
            >-</span
        >
<span style="color: rgb(224, 196, 156); ">#</span><span style="color: rgb(224, 196, 156); ">#</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(223, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(222, 193, 152); "
            >*</span
        ><span style="color: rgb(222, 192, 152); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 193, 152); ">*</span><span style="color: rgb(221, 193, 152); "
            >*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(222, 194, 154); "
            >*</span
        ><span style="color: rgb(151, 140, 115); ">=</span><span style="color: rgb(139, 131, 109); "
            >=</span
        ><span style="color: rgb(137, 130, 109); ">=</span><span style="color: rgb(136, 128, 108); "
            >=</span
        ><span style="color: rgb(136, 128, 108); ">=</span><span style="color: rgb(136, 129, 109); "
            >=</span
        ><span style="color: rgb(197, 154, 114); ">+</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(228, 177, 131); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(229, 176, 132); ">*</span><span style="color: rgb(228, 176, 130); "
            >*</span
        ><span style="color: rgb(228, 177, 131); ">*</span><span style="color: rgb(228, 175, 129); "
            >*</span
        ><span style="color: rgb(228, 177, 132); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(227, 176, 131); ">*</span><span style="color: rgb(228, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 176, 130); "
            >*</span
        ><span style="color: rgb(227, 175, 129); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(228, 174, 128); ">*</span><span style="color: rgb(226, 174, 127); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 174, 127); ">*</span><span style="color: rgb(227, 174, 126); "
            >*</span
        ><span style="color: rgb(226, 173, 126); ">*</span><span style="color: rgb(225, 171, 125); "
            >*</span
        ><span style="color: rgb(195, 141, 96); ">+</span><span style="color: rgb(191, 136, 91); "
            >+</span
        ><span style="color: rgb(191, 135, 91); ">+</span><span style="color: rgb(191, 135, 90); "
            >+</span
        ><span style="color: rgb(191, 136, 91); ">+</span><span style="color: rgb(173, 120, 80); "
            >=</span
        ><span style="color: rgb(191, 134, 89); ">+</span><span style="color: rgb(167, 116, 77); "
            >=</span
        ><span style="color: rgb(51, 44, 36); ">.</span><span style="color: rgb(47, 46, 41); "
            >.</span
        ><span style="color: rgb(47, 45, 40); ">.</span><span style="color: rgb(46, 44, 39); "
            >.</span
        ><span style="color: rgb(48, 46, 41); ">.</span><span style="color: rgb(73, 69, 58); "
            >:</span
        ><span style="color: rgb(116, 113, 97); ">-</span><span style="color: rgb(115, 115, 100); "
            >-</span
        ><span style="color: rgb(114, 114, 98); ">-</span><span style="color: rgb(113, 113, 100); "
            >-</span
        ><span style="color: rgb(113, 113, 100); ">-</span><span style="color: rgb(112, 112, 99); "
            >-</span
        ><span style="color: rgb(111, 112, 100); ">-</span><span style="color: rgb(109, 111, 98); "
            >-</span
        ><span style="color: rgb(108, 111, 98); ">-</span><span style="color: rgb(105, 110, 100); "
            >-</span
        ><span style="color: rgb(105, 109, 99); ">-</span><span style="color: rgb(103, 109, 101); "
            >-</span
        ><span style="color: rgb(103, 107, 98); ">-</span><span style="color: rgb(104, 109, 100); "
            >-</span
        ><span style="color: rgb(105, 109, 98); ">-</span><span style="color: rgb(95, 99, 91); "
            >-</span
        ><span style="color: rgb(75, 85, 84); ">:</span><span style="color: rgb(78, 88, 86); "
            >-</span
        ><span style="color: rgb(80, 89, 86); ">-</span><span style="color: rgb(82, 90, 86); "
            >-</span
        >
<span style="color: rgb(224, 196, 156); ">#</span><span style="color: rgb(223, 195, 156); ">#</span
        ><span style="color: rgb(223, 195, 154); ">#</span><span style="color: rgb(222, 194, 154); "
            >*</span
        ><span style="color: rgb(222, 194, 153); ">*</span><span style="color: rgb(222, 194, 153); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(222, 193, 152); "
            >*</span
        ><span style="color: rgb(222, 192, 151); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 193, 152); ">*</span><span style="color: rgb(221, 192, 152); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(222, 194, 154); "
            >*</span
        ><span style="color: rgb(222, 194, 154); ">*</span><span style="color: rgb(223, 193, 152); "
            >*</span
        ><span style="color: rgb(151, 139, 116); ">=</span><span style="color: rgb(139, 133, 112); "
            >=</span
        ><span style="color: rgb(136, 128, 106); ">=</span><span style="color: rgb(136, 129, 108); "
            >=</span
        ><span style="color: rgb(135, 129, 109); ">=</span><span style="color: rgb(134, 129, 109); "
            >=</span
        ><span style="color: rgb(131, 122, 101); ">=</span><span style="color: rgb(188, 143, 106); "
            >+</span
        ><span style="color: rgb(228, 177, 132); ">*</span><span style="color: rgb(228, 177, 132); "
            >*</span
        ><span style="color: rgb(229, 177, 131); ">*</span><span style="color: rgb(201, 152, 110); "
            >+</span
        ><span style="color: rgb(215, 165, 122); ">*</span><span style="color: rgb(223, 172, 128); "
            >*</span
        ><span style="color: rgb(218, 169, 125); ">*</span><span style="color: rgb(210, 161, 118); "
            >*</span
        ><span style="color: rgb(206, 155, 112); ">+</span><span style="color: rgb(227, 175, 128); "
            >*</span
        ><span style="color: rgb(226, 173, 127); ">*</span><span style="color: rgb(226, 173, 126); "
            >*</span
        ><span style="color: rgb(227, 174, 127); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(227, 173, 127); ">*</span><span style="color: rgb(226, 174, 129); "
            >*</span
        ><span style="color: rgb(226, 174, 128); ">*</span><span style="color: rgb(225, 172, 126); "
            >*</span
        ><span style="color: rgb(227, 175, 128); ">*</span><span style="color: rgb(227, 175, 130); "
            >*</span
        ><span style="color: rgb(227, 173, 126); ">*</span><span style="color: rgb(198, 142, 96); "
            >+</span
        ><span style="color: rgb(190, 134, 88); ">+</span><span style="color: rgb(191, 135, 91); "
            >+</span
        ><span style="color: rgb(191, 137, 92); ">+</span><span style="color: rgb(192, 136, 91); "
            >+</span
        ><span style="color: rgb(191, 134, 90); ">+</span><span style="color: rgb(191, 136, 92); "
            >+</span
        ><span style="color: rgb(191, 134, 89); ">+</span><span style="color: rgb(177, 124, 81); "
            >=</span
        ><span style="color: rgb(47, 45, 40); ">.</span><span style="color: rgb(47, 44, 39); "
            >.</span
        ><span style="color: rgb(44, 40, 35); ">.</span><span style="color: rgb(47, 45, 40); "
            >.</span
        ><span style="color: rgb(114, 112, 95); ">-</span><span style="color: rgb(63, 59, 50); "
            >:</span
        ><span style="color: rgb(115, 114, 99); ">-</span><span style="color: rgb(115, 115, 99); "
            >-</span
        ><span style="color: rgb(114, 114, 100); ">-</span><span style="color: rgb(115, 115, 100); "
            >-</span
        ><span style="color: rgb(112, 114, 100); ">-</span><span style="color: rgb(112, 113, 99); "
            >-</span
        ><span style="color: rgb(111, 113, 100); ">-</span><span style="color: rgb(110, 113, 100); "
            >-</span
        ><span style="color: rgb(108, 110, 97); ">-</span><span style="color: rgb(107, 110, 99); "
            >-</span
        ><span style="color: rgb(105, 109, 100); ">-</span><span style="color: rgb(103, 110, 101); "
            >-</span
        ><span style="color: rgb(104, 109, 99); ">-</span><span style="color: rgb(105, 109, 98); "
            >-</span
        ><span style="color: rgb(107, 111, 100); ">-</span><span style="color: rgb(95, 100, 91); "
            >-</span
        ><span style="color: rgb(75, 84, 81); ">:</span><span style="color: rgb(78, 86, 83); "
            >:</span
        ><span style="color: rgb(79, 88, 85); ">-</span><span style="color: rgb(81, 90, 86); "
            >-</span
        >
<span style="color: rgb(224, 196, 155); ">#</span><span style="color: rgb(224, 196, 156); ">#</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(223, 194, 155); "
            >*</span
        ><span style="color: rgb(222, 193, 152); ">*</span><span style="color: rgb(222, 193, 152); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(223, 193, 154); ">*</span><span style="color: rgb(221, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 193, 152); ">*</span><span style="color: rgb(221, 193, 152); "
            >*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(223, 194, 155); "
            >*</span
        ><span style="color: rgb(222, 195, 155); ">#</span><span style="color: rgb(221, 193, 153); "
            >*</span
        ><span style="color: rgb(149, 140, 116); ">=</span><span style="color: rgb(139, 132, 109); "
            >=</span
        ><span style="color: rgb(138, 129, 109); ">=</span><span style="color: rgb(135, 129, 109); "
            >=</span
        ><span style="color: rgb(136, 128, 110); ">=</span><span style="color: rgb(133, 126, 106); "
            >=</span
        ><span style="color: rgb(133, 127, 106); ">=</span><span style="color: rgb(133, 126, 105); "
            >=</span
        ><span style="color: rgb(133, 110, 84); ">=</span><span style="color: rgb(229, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(228, 175, 129); "
            >*</span
        ><span style="color: rgb(220, 168, 124); ">*</span><span style="color: rgb(157, 108, 72); "
            >=</span
        ><span style="color: rgb(201, 145, 101); ">+</span><span style="color: rgb(228, 176, 132); "
            >*</span
        ><span style="color: rgb(228, 176, 130); ">*</span><span style="color: rgb(227, 175, 130); "
            >*</span
        ><span style="color: rgb(227, 173, 126); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(226, 174, 127); ">*</span><span style="color: rgb(227, 175, 129); "
            >*</span
        ><span style="color: rgb(226, 174, 127); ">*</span><span style="color: rgb(227, 174, 127); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(226, 170, 123); ">*</span><span style="color: rgb(222, 168, 121); "
            >*</span
        ><span style="color: rgb(193, 137, 91); ">+</span><span style="color: rgb(192, 135, 89); "
            >+</span
        ><span style="color: rgb(192, 136, 92); ">+</span><span style="color: rgb(191, 137, 92); "
            >+</span
        ><span style="color: rgb(191, 134, 88); ">+</span><span style="color: rgb(191, 135, 90); "
            >+</span
        ><span style="color: rgb(190, 136, 91); ">+</span><span style="color: rgb(190, 133, 87); "
            >+</span
        ><span style="color: rgb(191, 134, 89); ">+</span><span style="color: rgb(124, 85, 57); "
            >-</span
        ><span style="color: rgb(46, 44, 39); ">.</span><span style="color: rgb(45, 43, 37); "
            >.</span
        ><span style="color: rgb(44, 42, 37); ">.</span><span style="color: rgb(88, 83, 70); "
            >:</span
        ><span style="color: rgb(118, 116, 98); ">=</span><span style="color: rgb(118, 116, 101); "
            >=</span
        ><span style="color: rgb(116, 116, 101); ">=</span><span style="color: rgb(116, 116, 100); "
            >=</span
        ><span style="color: rgb(116, 116, 101); ">=</span><span style="color: rgb(114, 114, 99); "
            >-</span
        ><span style="color: rgb(112, 112, 98); ">-</span><span style="color: rgb(112, 114, 100); "
            >-</span
        ><span style="color: rgb(111, 113, 101); ">-</span><span style="color: rgb(109, 112, 101); "
            >-</span
        ><span style="color: rgb(109, 112, 100); ">-</span><span style="color: rgb(106, 110, 100); "
            >-</span
        ><span style="color: rgb(105, 110, 100); ">-</span><span style="color: rgb(105, 108, 99); "
            >-</span
        ><span style="color: rgb(105, 110, 100); ">-</span><span style="color: rgb(105, 110, 101); "
            >-</span
        ><span style="color: rgb(107, 111, 99); ">-</span><span style="color: rgb(95, 101, 92); "
            >-</span
        ><span style="color: rgb(75, 85, 83); ">:</span><span style="color: rgb(79, 87, 85); "
            >:</span
        ><span style="color: rgb(80, 91, 86); ">-</span><span style="color: rgb(82, 90, 87); "
            >-</span
        >
<span style="color: rgb(225, 196, 157); ">#</span><span style="color: rgb(223, 194, 155); ">*</span
        ><span style="color: rgb(222, 194, 154); ">*</span><span style="color: rgb(222, 194, 153); "
            >*</span
        ><span style="color: rgb(223, 195, 156); ">#</span><span style="color: rgb(222, 193, 152); "
            >*</span
        ><span style="color: rgb(221, 193, 155); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 194, 155); ">*</span><span style="color: rgb(221, 193, 152); "
            >*</span
        ><span style="color: rgb(222, 192, 152); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(223, 193, 154); ">*</span><span style="color: rgb(222, 194, 155); "
            >*</span
        ><span style="color: rgb(222, 194, 154); ">*</span><span style="color: rgb(221, 192, 152); "
            >*</span
        ><span style="color: rgb(149, 138, 115); ">=</span><span style="color: rgb(137, 130, 108); "
            >=</span
        ><span style="color: rgb(136, 128, 107); ">=</span><span style="color: rgb(135, 128, 107); "
            >=</span
        ><span style="color: rgb(134, 128, 107); ">=</span><span style="color: rgb(132, 126, 106); "
            >=</span
        ><span style="color: rgb(132, 126, 106); ">=</span><span style="color: rgb(132, 128, 108); "
            >=</span
        ><span style="color: rgb(133, 126, 105); ">=</span><span style="color: rgb(125, 115, 95); "
            >=</span
        ><span style="color: rgb(213, 166, 123); ">*</span><span style="color: rgb(228, 177, 132); "
            >*</span
        ><span style="color: rgb(228, 174, 129); ">*</span><span style="color: rgb(228, 175, 129); "
            >*</span
        ><span style="color: rgb(228, 174, 129); ">*</span><span style="color: rgb(226, 173, 128); "
            >*</span
        ><span style="color: rgb(227, 175, 128); ">*</span><span style="color: rgb(226, 175, 128); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 175, 129); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(227, 174, 127); ">*</span><span style="color: rgb(227, 175, 128); "
            >*</span
        ><span style="color: rgb(226, 172, 126); ">*</span><span style="color: rgb(224, 169, 119); "
            >*</span
        ><span style="color: rgb(191, 136, 91); ">+</span><span style="color: rgb(191, 137, 90); "
            >+</span
        ><span style="color: rgb(188, 132, 86); ">+</span><span style="color: rgb(135, 94, 61); "
            >-</span
        ><span style="color: rgb(191, 137, 91); ">+</span><span style="color: rgb(191, 134, 89); "
            >+</span
        ><span style="color: rgb(192, 136, 92); ">+</span><span style="color: rgb(191, 136, 91); "
            >+</span
        ><span style="color: rgb(191, 136, 93); ">+</span><span style="color: rgb(190, 134, 90); "
            >+</span
        ><span style="color: rgb(190, 135, 90); ">+</span><span style="color: rgb(42, 37, 29); "
            >.</span
        ><span style="color: rgb(51, 45, 38); ">.</span><span style="color: rgb(120, 117, 101); "
            >=</span
        ><span style="color: rgb(119, 116, 101); ">=</span><span style="color: rgb(119, 116, 100); "
            >=</span
        ><span style="color: rgb(118, 115, 98); ">=</span><span style="color: rgb(117, 116, 99); "
            >=</span
        ><span style="color: rgb(117, 116, 100); ">=</span><span style="color: rgb(115, 115, 100); "
            >-</span
        ><span style="color: rgb(115, 115, 100); ">-</span><span style="color: rgb(114, 114, 99); "
            >-</span
        ><span style="color: rgb(113, 115, 102); ">-</span><span style="color: rgb(112, 113, 100); "
            >-</span
        ><span style="color: rgb(111, 112, 98); ">-</span><span style="color: rgb(108, 112, 101); "
            >-</span
        ><span style="color: rgb(107, 112, 100); ">-</span><span style="color: rgb(107, 110, 101); "
            >-</span
        ><span style="color: rgb(104, 108, 97); ">-</span><span style="color: rgb(104, 108, 98); "
            >-</span
        ><span style="color: rgb(104, 108, 97); ">-</span><span style="color: rgb(105, 110, 100); "
            >-</span
        ><span style="color: rgb(107, 111, 100); ">-</span><span style="color: rgb(96, 100, 92); "
            >-</span
        ><span style="color: rgb(77, 86, 83); ">:</span><span style="color: rgb(79, 88, 86); "
            >-</span
        ><span style="color: rgb(80, 87, 84); ">-</span><span style="color: rgb(83, 90, 86); "
            >-</span
        >
<span style="color: rgb(224, 195, 155); ">#</span><span style="color: rgb(223, 195, 156); ">#</span
        ><span style="color: rgb(223, 194, 155); ">*</span><span style="color: rgb(223, 194, 154); "
            >*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(222, 194, 154); "
            >*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(221, 192, 152); "
            >*</span
        ><span style="color: rgb(222, 194, 154); ">*</span><span style="color: rgb(221, 193, 153); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 194, 153); ">*</span><span style="color: rgb(222, 193, 155); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(219, 191, 150); "
            >*</span
        ><span style="color: rgb(148, 138, 115); ">=</span><span style="color: rgb(137, 130, 107); "
            >=</span
        ><span style="color: rgb(135, 127, 105); ">=</span><span style="color: rgb(132, 126, 106); "
            >=</span
        ><span style="color: rgb(134, 128, 107); ">=</span><span style="color: rgb(134, 128, 108); "
            >=</span
        ><span style="color: rgb(133, 126, 106); ">=</span><span style="color: rgb(131, 127, 108); "
            >=</span
        ><span style="color: rgb(131, 125, 105); ">=</span><span style="color: rgb(131, 123, 104); "
            >=</span
        ><span style="color: rgb(131, 125, 105); ">=</span><span style="color: rgb(197, 155, 115); "
            >+</span
        ><span style="color: rgb(228, 174, 129); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(228, 176, 131); ">*</span><span style="color: rgb(228, 176, 131); "
            >*</span
        ><span style="color: rgb(227, 175, 130); ">*</span><span style="color: rgb(228, 175, 128); "
            >*</span
        ><span style="color: rgb(227, 173, 127); ">*</span><span style="color: rgb(226, 173, 127); "
            >*</span
        ><span style="color: rgb(226, 172, 124); ">*</span><span style="color: rgb(227, 173, 125); "
            >*</span
        ><span style="color: rgb(225, 169, 121); ">*</span><span style="color: rgb(204, 148, 103); "
            >+</span
        ><span style="color: rgb(180, 126, 83); ">=</span><span style="color: rgb(172, 119, 79); "
            >=</span
        ><span style="color: rgb(160, 106, 68); ">=</span><span style="color: rgb(182, 125, 82); "
            >=</span
        ><span style="color: rgb(191, 135, 91); ">+</span><span style="color: rgb(191, 134, 89); "
            >+</span
        ><span style="color: rgb(192, 135, 91); ">+</span><span style="color: rgb(192, 136, 91); "
            >+</span
        ><span style="color: rgb(191, 135, 90); ">+</span><span style="color: rgb(191, 137, 93); "
            >+</span
        ><span style="color: rgb(190, 135, 90); ">+</span><span style="color: rgb(190, 134, 90); "
            >+</span
        ><span style="color: rgb(191, 133, 88); ">+</span><span style="color: rgb(121, 117, 101); "
            >=</span
        ><span style="color: rgb(121, 118, 101); ">=</span><span style="color: rgb(121, 118, 101); "
            >=</span
        ><span style="color: rgb(119, 117, 100); ">=</span><span style="color: rgb(118, 116, 99); "
            >=</span
        ><span style="color: rgb(117, 115, 100); ">=</span><span style="color: rgb(118, 117, 101); "
            >=</span
        ><span style="color: rgb(116, 116, 102); ">=</span><span style="color: rgb(116, 117, 102); "
            >=</span
        ><span style="color: rgb(115, 116, 102); ">=</span><span style="color: rgb(114, 115, 100); "
            >-</span
        ><span style="color: rgb(112, 114, 100); ">-</span><span style="color: rgb(111, 113, 100); "
            >-</span
        ><span style="color: rgb(109, 113, 101); ">-</span><span style="color: rgb(108, 111, 99); "
            >-</span
        ><span style="color: rgb(108, 111, 100); ">-</span><span style="color: rgb(106, 111, 100); "
            >-</span
        ><span style="color: rgb(105, 108, 98); ">-</span><span style="color: rgb(103, 107, 96); "
            >-</span
        ><span style="color: rgb(105, 109, 97); ">-</span><span style="color: rgb(106, 110, 99); "
            >-</span
        ><span style="color: rgb(106, 110, 99); ">-</span><span style="color: rgb(96, 102, 93); "
            >-</span
        ><span style="color: rgb(77, 85, 83); ">:</span><span style="color: rgb(79, 88, 85); "
            >-</span
        ><span style="color: rgb(80, 89, 87); ">-</span><span style="color: rgb(83, 90, 86); "
            >-</span
        >
<span style="color: rgb(224, 196, 158); ">#</span><span style="color: rgb(223, 195, 155); ">#</span
        ><span style="color: rgb(223, 195, 155); ">#</span><span style="color: rgb(222, 194, 154); "
            >*</span
        ><span style="color: rgb(222, 193, 152); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(221, 193, 152); "
            >*</span
        ><span style="color: rgb(221, 192, 152); ">*</span><span style="color: rgb(221, 194, 153); "
            >*</span
        ><span style="color: rgb(221, 192, 150); ">*</span><span style="color: rgb(221, 192, 153); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(220, 192, 152); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(216, 187, 147); "
            >*</span
        ><span style="color: rgb(148, 139, 116); ">=</span><span style="color: rgb(138, 132, 112); "
            >=</span
        ><span style="color: rgb(136, 129, 109); ">=</span><span style="color: rgb(134, 128, 107); "
            >=</span
        ><span style="color: rgb(133, 127, 106); ">=</span><span style="color: rgb(133, 127, 107); "
            >=</span
        ><span style="color: rgb(131, 126, 105); ">=</span><span style="color: rgb(131, 126, 105); "
            >=</span
        ><span style="color: rgb(131, 126, 106); ">=</span><span style="color: rgb(130, 125, 104); "
            >=</span
        ><span style="color: rgb(130, 124, 105); ">=</span><span style="color: rgb(131, 126, 107); "
            >=</span
        ><span style="color: rgb(176, 141, 108); ">+</span><span style="color: rgb(228, 175, 130); "
            >*</span
        ><span style="color: rgb(228, 174, 129); ">*</span><span style="color: rgb(228, 174, 128); "
            >*</span
        ><span style="color: rgb(227, 174, 128); ">*</span><span style="color: rgb(227, 173, 128); "
            >*</span
        ><span style="color: rgb(226, 172, 125); ">*</span><span style="color: rgb(208, 153, 107); "
            >+</span
        ><span style="color: rgb(153, 108, 71); ">=</span><span style="color: rgb(164, 112, 72); "
            >=</span
        ><span style="color: rgb(172, 115, 75); ">=</span><span style="color: rgb(176, 119, 77); "
            >=</span
        ><span style="color: rgb(177, 121, 78); ">=</span><span style="color: rgb(186, 130, 85); "
            >+</span
        ><span style="color: rgb(192, 135, 91); ">+</span><span style="color: rgb(191, 135, 89); "
            >+</span
        ><span style="color: rgb(191, 136, 91); ">+</span><span style="color: rgb(192, 136, 91); "
            >+</span
        ><span style="color: rgb(192, 135, 89); ">+</span><span style="color: rgb(192, 136, 91); "
            >+</span
        ><span style="color: rgb(191, 134, 89); ">+</span><span style="color: rgb(191, 134, 90); "
            >+</span
        ><span style="color: rgb(190, 134, 89); ">+</span><span style="color: rgb(191, 134, 88); "
            >+</span
        ><span style="color: rgb(193, 137, 91); ">+</span><span style="color: rgb(125, 121, 104); "
            >=</span
        ><span style="color: rgb(120, 117, 99); ">=</span><span style="color: rgb(119, 117, 103); "
            >=</span
        ><span style="color: rgb(118, 117, 103); ">=</span><span style="color: rgb(118, 116, 100); "
            >=</span
        ><span style="color: rgb(118, 116, 101); ">=</span><span style="color: rgb(118, 116, 101); "
            >=</span
        ><span style="color: rgb(116, 116, 101); ">=</span><span style="color: rgb(115, 115, 101); "
            >-</span
        ><span style="color: rgb(115, 115, 100); ">-</span><span style="color: rgb(114, 115, 101); "
            >-</span
        ><span style="color: rgb(112, 114, 101); ">-</span><span style="color: rgb(113, 113, 102); "
            >-</span
        ><span style="color: rgb(110, 112, 100); ">-</span><span style="color: rgb(109, 113, 102); "
            >-</span
        ><span style="color: rgb(108, 111, 100); ">-</span><span style="color: rgb(107, 110, 101); "
            >-</span
        ><span style="color: rgb(104, 108, 97); ">-</span><span style="color: rgb(105, 109, 101); "
            >-</span
        ><span style="color: rgb(104, 109, 101); ">-</span><span style="color: rgb(105, 110, 101); "
            >-</span
        ><span style="color: rgb(106, 110, 99); ">-</span><span style="color: rgb(98, 104, 96); "
            >-</span
        ><span style="color: rgb(77, 87, 85); ">:</span><span style="color: rgb(80, 88, 84); "
            >-</span
        ><span style="color: rgb(80, 88, 84); ">-</span><span style="color: rgb(83, 91, 86); "
            >-</span
        >
<span style="color: rgb(224, 196, 156); ">#</span><span style="color: rgb(223, 194, 153); ">*</span
        ><span style="color: rgb(223, 194, 154); ">*</span><span style="color: rgb(222, 193, 154); "
            >*</span
        ><span style="color: rgb(222, 194, 154); ">*</span><span style="color: rgb(222, 194, 154); "
            >*</span
        ><span style="color: rgb(222, 194, 153); ">*</span><span style="color: rgb(221, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(221, 193, 152); "
            >*</span
        ><span style="color: rgb(221, 193, 152); ">*</span><span style="color: rgb(221, 193, 153); "
            >*</span
        ><span style="color: rgb(221, 194, 155); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(215, 187, 147); "
            >*</span
        ><span style="color: rgb(148, 138, 115); ">=</span><span style="color: rgb(137, 131, 110); "
            >=</span
        ><span style="color: rgb(135, 129, 108); ">=</span><span style="color: rgb(133, 128, 109); "
            >=</span
        ><span style="color: rgb(133, 127, 107); ">=</span><span style="color: rgb(133, 127, 108); "
            >=</span
        ><span style="color: rgb(131, 127, 109); ">=</span><span style="color: rgb(132, 127, 107); "
            >=</span
        ><span style="color: rgb(130, 125, 105); ">=</span><span style="color: rgb(129, 124, 104); "
            >=</span
        ><span style="color: rgb(130, 125, 106); ">=</span><span style="color: rgb(130, 124, 105); "
            >=</span
        ><span style="color: rgb(130, 123, 104); ">=</span><span style="color: rgb(130, 125, 106); "
            >=</span
        ><span style="color: rgb(130, 126, 107); ">=</span><span style="color: rgb(128, 123, 103); "
            >=</span
        ><span style="color: rgb(130, 125, 105); ">=</span><span style="color: rgb(127, 117, 97); "
            >=</span
        ><span style="color: rgb(151, 102, 65); ">-</span><span style="color: rgb(175, 119, 77); "
            >=</span
        ><span style="color: rgb(174, 117, 76); ">=</span><span style="color: rgb(178, 122, 79); "
            >=</span
        ><span style="color: rgb(188, 134, 90); ">+</span><span style="color: rgb(191, 136, 90); "
            >+</span
        ><span style="color: rgb(192, 137, 92); ">+</span><span style="color: rgb(193, 137, 91); "
            >+</span
        ><span style="color: rgb(192, 136, 91); ">+</span><span style="color: rgb(191, 135, 90); "
            >+</span
        ><span style="color: rgb(192, 137, 92); ">+</span><span style="color: rgb(192, 135, 90); "
            >+</span
        ><span style="color: rgb(191, 135, 89); ">+</span><span style="color: rgb(191, 136, 91); "
            >+</span
        ><span style="color: rgb(192, 136, 91); ">+</span><span style="color: rgb(190, 135, 90); "
            >+</span
        ><span style="color: rgb(190, 134, 90); ">+</span><span style="color: rgb(191, 137, 93); "
            >+</span
        ><span style="color: rgb(193, 137, 92); ">+</span><span style="color: rgb(123, 120, 104); "
            >=</span
        ><span style="color: rgb(120, 119, 102); ">=</span><span style="color: rgb(120, 118, 102); "
            >=</span
        ><span style="color: rgb(119, 118, 102); ">=</span><span style="color: rgb(118, 117, 101); "
            >=</span
        ><span style="color: rgb(117, 117, 103); ">=</span><span style="color: rgb(117, 117, 101); "
            >=</span
        ><span style="color: rgb(117, 117, 103); ">=</span><span style="color: rgb(115, 117, 102); "
            >=</span
        ><span style="color: rgb(115, 117, 103); ">=</span><span style="color: rgb(115, 114, 100); "
            >-</span
        ><span style="color: rgb(113, 115, 101); ">-</span><span style="color: rgb(112, 115, 103); "
            >-</span
        ><span style="color: rgb(111, 114, 104); ">-</span><span style="color: rgb(110, 113, 101); "
            >-</span
        ><span style="color: rgb(108, 112, 101); ">-</span><span style="color: rgb(107, 110, 100); "
            >-</span
        ><span style="color: rgb(102, 107, 96); ">-</span><span style="color: rgb(103, 107, 96); "
            >-</span
        ><span style="color: rgb(104, 108, 99); ">-</span><span style="color: rgb(105, 110, 101); "
            >-</span
        ><span style="color: rgb(107, 112, 102); ">-</span><span style="color: rgb(98, 103, 95); "
            >-</span
        ><span style="color: rgb(78, 88, 85); ">-</span><span style="color: rgb(79, 88, 86); "
            >-</span
        ><span style="color: rgb(82, 91, 87); ">-</span><span style="color: rgb(83, 92, 88); "
            >-</span
        >
<span style="color: rgb(224, 195, 156); ">#</span><span style="color: rgb(223, 195, 155); ">#</span
        ><span style="color: rgb(223, 195, 156); ">#</span><span style="color: rgb(223, 194, 155); "
            >*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(221, 192, 152); ">*</span><span style="color: rgb(221, 193, 152); "
            >*</span
        ><span style="color: rgb(222, 195, 154); ">*</span><span style="color: rgb(221, 193, 153); "
            >*</span
        ><span style="color: rgb(221, 193, 152); ">*</span><span style="color: rgb(221, 192, 153); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(222, 194, 154); "
            >*</span
        ><span style="color: rgb(221, 193, 152); ">*</span><span style="color: rgb(213, 185, 147); "
            >*</span
        ><span style="color: rgb(147, 137, 114); ">=</span><span style="color: rgb(138, 131, 111); "
            >=</span
        ><span style="color: rgb(134, 129, 111); ">=</span><span style="color: rgb(133, 128, 109); "
            >=</span
        ><span style="color: rgb(131, 126, 104); ">=</span><span style="color: rgb(132, 125, 104); "
            >=</span
        ><span style="color: rgb(132, 126, 107); ">=</span><span style="color: rgb(130, 125, 105); "
            >=</span
        ><span style="color: rgb(130, 125, 104); ">=</span><span style="color: rgb(130, 126, 107); "
            >=</span
        ><span style="color: rgb(129, 124, 104); ">=</span><span style="color: rgb(129, 124, 104); "
            >=</span
        ><span style="color: rgb(128, 123, 105); ">=</span><span style="color: rgb(128, 123, 103); "
            >=</span
        ><span style="color: rgb(129, 124, 107); ">=</span><span style="color: rgb(129, 124, 105); "
            >=</span
        ><span style="color: rgb(129, 124, 106); ">=</span><span style="color: rgb(131, 123, 103); "
            >=</span
        ><span style="color: rgb(183, 128, 87); ">=</span><span style="color: rgb(191, 136, 91); "
            >+</span
        ><span style="color: rgb(193, 137, 93); ">+</span><span style="color: rgb(192, 137, 94); "
            >+</span
        ><span style="color: rgb(192, 136, 90); ">+</span><span style="color: rgb(192, 137, 93); "
            >+</span
        ><span style="color: rgb(193, 136, 91); ">+</span><span style="color: rgb(192, 135, 90); "
            >+</span
        ><span style="color: rgb(191, 136, 91); ">+</span><span style="color: rgb(192, 135, 90); "
            >+</span
        ><span style="color: rgb(191, 135, 90); ">+</span><span style="color: rgb(191, 135, 90); "
            >+</span
        ><span style="color: rgb(191, 135, 90); ">+</span><span style="color: rgb(190, 132, 87); "
            >+</span
        ><span style="color: rgb(192, 135, 90); ">+</span><span style="color: rgb(190, 135, 92); "
            >+</span
        ><span style="color: rgb(192, 137, 93); ">+</span><span style="color: rgb(190, 133, 88); "
            >+</span
        ><span style="color: rgb(194, 138, 94); ">+</span><span style="color: rgb(125, 120, 105); "
            >=</span
        ><span style="color: rgb(120, 117, 101); ">=</span><span style="color: rgb(121, 118, 101); "
            >=</span
        ><span style="color: rgb(119, 119, 103); ">=</span><span style="color: rgb(118, 118, 103); "
            >=</span
        ><span style="color: rgb(119, 118, 104); ">=</span><span style="color: rgb(118, 118, 105); "
            >=</span
        ><span style="color: rgb(117, 117, 104); ">=</span><span style="color: rgb(115, 119, 105); "
            >=</span
        ><span style="color: rgb(115, 116, 101); ">=</span><span style="color: rgb(114, 116, 101); "
            >=</span
        ><span style="color: rgb(113, 117, 104); ">=</span><span style="color: rgb(113, 115, 102); "
            >-</span
        ><span style="color: rgb(111, 114, 102); ">-</span><span style="color: rgb(111, 114, 103); "
            >-</span
        ><span style="color: rgb(110, 114, 102); ">-</span><span style="color: rgb(107, 111, 100); "
            >-</span
        ><span style="color: rgb(103, 106, 96); ">-</span><span style="color: rgb(103, 106, 97); "
            >-</span
        ><span style="color: rgb(103, 108, 99); ">-</span><span style="color: rgb(104, 109, 101); "
            >-</span
        ><span style="color: rgb(107, 111, 102); ">-</span><span style="color: rgb(99, 104, 97); "
            >-</span
        ><span style="color: rgb(76, 85, 83); ">:</span><span style="color: rgb(79, 88, 87); "
            >-</span
        ><span style="color: rgb(81, 90, 87); ">-</span><span style="color: rgb(83, 91, 86); "
            >-</span
        >
<span style="color: rgb(224, 195, 155); ">#</span><span style="color: rgb(222, 194, 153); ">*</span
        ><span style="color: rgb(222, 193, 152); ">*</span><span style="color: rgb(221, 192, 151); "
            >*</span
        ><span style="color: rgb(222, 193, 154); ">*</span><span style="color: rgb(222, 194, 154); "
            >*</span
        ><span style="color: rgb(221, 192, 152); ">*</span><span style="color: rgb(222, 194, 154); "
            >*</span
        ><span style="color: rgb(221, 194, 154); ">*</span><span style="color: rgb(221, 190, 152); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(222, 194, 154); "
            >*</span
        ><span style="color: rgb(221, 193, 152); ">*</span><span style="color: rgb(221, 192, 153); "
            >*</span
        ><span style="color: rgb(221, 194, 154); ">*</span><span style="color: rgb(212, 183, 143); "
            >*</span
        ><span style="color: rgb(144, 137, 116); ">=</span><span style="color: rgb(137, 131, 112); "
            >=</span
        ><span style="color: rgb(133, 128, 109); ">=</span><span style="color: rgb(133, 128, 107); "
            >=</span
        ><span style="color: rgb(132, 127, 108); ">=</span><span style="color: rgb(132, 127, 108); "
            >=</span
        ><span style="color: rgb(131, 127, 109); ">=</span><span style="color: rgb(131, 125, 107); "
            >=</span
        ><span style="color: rgb(130, 127, 109); ">=</span><span style="color: rgb(131, 126, 109); "
            >=</span
        ><span style="color: rgb(128, 125, 109); ">=</span><span style="color: rgb(128, 123, 106); "
            >=</span
        ><span style="color: rgb(128, 125, 108); ">=</span><span style="color: rgb(133, 129, 111); "
            >=</span
        ><span style="color: rgb(114, 101, 82); ">-</span><span style="color: rgb(106, 95, 80); "
            >-</span
        ><span style="color: rgb(121, 115, 99); ">=</span><span style="color: rgb(153, 144, 124); "
            >+</span
        ><span style="color: rgb(226, 171, 125); ">*</span><span style="color: rgb(227, 174, 128); "
            >*</span
        ><span style="color: rgb(225, 172, 124); ">*</span><span style="color: rgb(195, 139, 93); "
            >+</span
        ><span style="color: rgb(191, 136, 91); ">+</span><span style="color: rgb(191, 136, 92); "
            >+</span
        ><span style="color: rgb(192, 136, 93); ">+</span><span style="color: rgb(192, 140, 95); "
            >+</span
        ><span style="color: rgb(191, 135, 89); ">+</span><span style="color: rgb(191, 134, 89); "
            >+</span
        ><span style="color: rgb(191, 135, 90); ">+</span><span style="color: rgb(190, 135, 89); "
            >+</span
        ><span style="color: rgb(191, 137, 93); ">+</span><span style="color: rgb(190, 132, 86); "
            >+</span
        ><span style="color: rgb(191, 135, 91); ">+</span><span style="color: rgb(190, 134, 90); "
            >+</span
        ><span style="color: rgb(190, 134, 90); ">+</span><span style="color: rgb(190, 135, 90); "
            >+</span
        ><span style="color: rgb(193, 136, 91); ">+</span><span style="color: rgb(126, 123, 106); "
            >=</span
        ><span style="color: rgb(121, 118, 102); ">=</span><span style="color: rgb(121, 120, 105); "
            >=</span
        ><span style="color: rgb(119, 120, 106); ">=</span><span style="color: rgb(120, 119, 103); "
            >=</span
        ><span style="color: rgb(119, 117, 101); ">=</span><span style="color: rgb(118, 117, 103); "
            >=</span
        ><span style="color: rgb(118, 118, 105); ">=</span><span style="color: rgb(116, 118, 104); "
            >=</span
        ><span style="color: rgb(115, 117, 104); ">=</span><span style="color: rgb(114, 117, 103); "
            >=</span
        ><span style="color: rgb(113, 115, 103); ">-</span><span style="color: rgb(114, 115, 102); "
            >-</span
        ><span style="color: rgb(112, 115, 103); ">-</span><span style="color: rgb(111, 115, 105); "
            >-</span
        ><span style="color: rgb(108, 113, 104); ">-</span><span style="color: rgb(104, 109, 98); "
            >-</span
        ><span style="color: rgb(103, 106, 96); ">-</span><span style="color: rgb(102, 106, 97); "
            >-</span
        ><span style="color: rgb(103, 110, 102); ">-</span><span style="color: rgb(105, 110, 101); "
            >-</span
        ><span style="color: rgb(109, 112, 101); ">-</span><span style="color: rgb(99, 105, 98); "
            >-</span
        ><span style="color: rgb(78, 88, 87); ">-</span><span style="color: rgb(80, 90, 88); "
            >-</span
        ><span style="color: rgb(82, 90, 86); ">-</span><span style="color: rgb(84, 93, 86); "
            >-</span
        >
<span style="color: rgb(224, 195, 156); ">#</span><span style="color: rgb(222, 193, 153); ">*</span
        ><span style="color: rgb(222, 193, 154); ">*</span><span style="color: rgb(221, 193, 152); "
            >*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(221, 193, 154); "
            >*</span
        ><span style="color: rgb(221, 192, 151); ">*</span><span style="color: rgb(221, 194, 154); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(221, 193, 153); "
            >*</span
        ><span style="color: rgb(221, 192, 152); ">*</span><span style="color: rgb(221, 193, 154); "
            >*</span
        ><span style="color: rgb(222, 194, 156); ">*</span><span style="color: rgb(221, 193, 153); "
            >*</span
        ><span style="color: rgb(221, 194, 154); ">*</span><span style="color: rgb(210, 182, 143); "
            >*</span
        ><span style="color: rgb(144, 136, 114); ">=</span><span style="color: rgb(137, 131, 111); "
            >=</span
        ><span style="color: rgb(135, 130, 112); ">=</span><span style="color: rgb(134, 129, 110); "
            >=</span
        ><span style="color: rgb(132, 128, 109); ">=</span><span style="color: rgb(131, 126, 109); "
            >=</span
        ><span style="color: rgb(131, 127, 110); ">=</span><span style="color: rgb(130, 127, 109); "
            >=</span
        ><span style="color: rgb(128, 123, 105); ">=</span><span style="color: rgb(144, 137, 118); "
            >=</span
        ><span style="color: rgb(163, 155, 135); ">+</span><span style="color: rgb(153, 143, 122); "
            >+</span
        ><span style="color: rgb(222, 202, 179); ">#</span><span style="color: rgb(224, 203, 181); "
            >#</span
        ><span style="color: rgb(211, 195, 174); ">*</span><span style="color: rgb(180, 162, 144); "
            >+</span
        ><span style="color: rgb(193, 157, 124); ">+</span><span style="color: rgb(220, 167, 123); "
            >*</span
        ><span style="color: rgb(227, 173, 126); ">*</span><span style="color: rgb(226, 173, 126); "
            >*</span
        ><span style="color: rgb(227, 173, 126); ">*</span><span style="color: rgb(226, 173, 126); "
            >*</span
        ><span style="color: rgb(226, 173, 127); ">*</span><span style="color: rgb(210, 155, 108); "
            >+</span
        ><span style="color: rgb(197, 141, 96); ">+</span><span style="color: rgb(193, 138, 93); "
            >+</span
        ><span style="color: rgb(192, 137, 92); ">+</span><span style="color: rgb(191, 136, 91); "
            >+</span
        ><span style="color: rgb(191, 135, 90); ">+</span><span style="color: rgb(191, 135, 90); "
            >+</span
        ><span style="color: rgb(191, 135, 91); ">+</span><span style="color: rgb(190, 135, 91); "
            >+</span
        ><span style="color: rgb(190, 134, 89); ">+</span><span style="color: rgb(191, 135, 91); "
            >+</span
        ><span style="color: rgb(191, 135, 91); ">+</span><span style="color: rgb(190, 133, 87); "
            >+</span
        ><span style="color: rgb(190, 135, 91); ">+</span><span style="color: rgb(125, 113, 101); "
            >=</span
        ><span style="color: rgb(179, 170, 160); ">*</span><span style="color: rgb(179, 170, 157); "
            >*</span
        ><span style="color: rgb(182, 172, 159); ">*</span><span style="color: rgb(108, 99, 84); "
            >-</span
        ><span style="color: rgb(120, 121, 105); ">=</span><span style="color: rgb(119, 119, 105); "
            >=</span
        ><span style="color: rgb(118, 118, 104); ">=</span><span style="color: rgb(117, 117, 103); "
            >=</span
        ><span style="color: rgb(116, 118, 104); ">=</span><span style="color: rgb(116, 118, 107); "
            >=</span
        ><span style="color: rgb(116, 119, 104); ">=</span><span style="color: rgb(114, 117, 105); "
            >=</span
        ><span style="color: rgb(113, 116, 104); ">=</span><span style="color: rgb(112, 115, 103); "
            >-</span
        ><span style="color: rgb(112, 116, 105); ">=</span><span style="color: rgb(102, 106, 96); "
            >-</span
        ><span style="color: rgb(103, 106, 95); ">-</span><span style="color: rgb(102, 108, 101); "
            >-</span
        ><span style="color: rgb(105, 110, 100); ">-</span><span style="color: rgb(105, 111, 101); "
            >-</span
        ><span style="color: rgb(107, 112, 103); ">-</span><span style="color: rgb(99, 105, 99); "
            >-</span
        ><span style="color: rgb(78, 86, 85); ">:</span><span style="color: rgb(81, 89, 88); "
            >-</span
        ><span style="color: rgb(81, 91, 87); ">-</span><span style="color: rgb(84, 92, 88); "
            >-</span
        >
<span style="color: rgb(224, 195, 155); ">#</span><span style="color: rgb(223, 194, 154); ">*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(221, 192, 151); "
            >*</span
        ><span style="color: rgb(221, 192, 152); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(221, 193, 152); "
            >*</span
        ><span style="color: rgb(221, 192, 152); ">*</span><span style="color: rgb(221, 193, 153); "
            >*</span
        ><span style="color: rgb(221, 192, 153); ">*</span><span style="color: rgb(221, 194, 155); "
            >*</span
        ><span style="color: rgb(221, 192, 152); ">*</span><span style="color: rgb(221, 193, 154); "
            >*</span
        ><span style="color: rgb(221, 193, 153); ">*</span><span style="color: rgb(210, 182, 143); "
            >*</span
        ><span style="color: rgb(143, 135, 115); ">=</span><span style="color: rgb(138, 134, 117); "
            >=</span
        ><span style="color: rgb(125, 120, 102); ">=</span><span style="color: rgb(133, 122, 105); "
            >=</span
        ><span style="color: rgb(173, 162, 144); ">+</span><span style="color: rgb(179, 168, 148); "
            >+</span
        ><span style="color: rgb(178, 161, 141); ">+</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(210, 190, 168); "
            >*</span
        ><span style="color: rgb(199, 182, 161); ">*</span><span style="color: rgb(223, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(180, 145, 111); ">+</span><span style="color: rgb(225, 172, 125); "
            >*</span
        ><span style="color: rgb(226, 172, 126); ">*</span><span style="color: rgb(227, 172, 127); "
            >*</span
        ><span style="color: rgb(227, 172, 125); ">*</span><span style="color: rgb(226, 173, 127); "
            >*</span
        ><span style="color: rgb(227, 173, 126); ">*</span><span style="color: rgb(226, 172, 125); "
            >*</span
        ><span style="color: rgb(227, 173, 127); ">*</span><span style="color: rgb(226, 171, 125); "
            >*</span
        ><span style="color: rgb(213, 158, 112); ">+</span><span style="color: rgb(192, 137, 92); "
            >+</span
        ><span style="color: rgb(192, 136, 91); ">+</span><span style="color: rgb(191, 135, 91); "
            >+</span
        ><span style="color: rgb(193, 136, 92); ">+</span><span style="color: rgb(191, 135, 90); "
            >+</span
        ><span style="color: rgb(191, 136, 91); ">+</span><span style="color: rgb(191, 135, 91); "
            >+</span
        ><span style="color: rgb(191, 138, 94); ">+</span><span style="color: rgb(190, 135, 90); "
            >+</span
        ><span style="color: rgb(191, 136, 92); ">+</span><span style="color: rgb(189, 134, 90); "
            >+</span
        ><span style="color: rgb(154, 110, 78); ">=</span><span style="color: rgb(150, 131, 114); "
            >=</span
        ><span style="color: rgb(157, 147, 134); ">+</span><span style="color: rgb(180, 169, 153); "
            >*</span
        ><span style="color: rgb(178, 167, 152); ">+</span><span style="color: rgb(153, 149, 134); "
            >+</span
        ><span style="color: rgb(145, 141, 127); ">=</span><span style="color: rgb(120, 119, 107); "
            >=</span
        ><span style="color: rgb(118, 118, 105); ">=</span><span style="color: rgb(117, 119, 107); "
            >=</span
        ><span style="color: rgb(116, 119, 107); ">=</span><span style="color: rgb(115, 119, 108); "
            >=</span
        ><span style="color: rgb(113, 117, 105); ">=</span><span style="color: rgb(112, 116, 105); "
            >=</span
        ><span style="color: rgb(112, 115, 104); ">-</span><span style="color: rgb(99, 102, 92); "
            >-</span
        ><span style="color: rgb(102, 107, 100); ">-</span><span style="color: rgb(102, 108, 102); "
            >-</span
        ><span style="color: rgb(103, 110, 102); ">-</span><span style="color: rgb(104, 110, 103); "
            >-</span
        ><span style="color: rgb(108, 114, 105); ">-</span><span style="color: rgb(101, 106, 98); "
            >-</span
        ><span style="color: rgb(79, 89, 87); ">-</span><span style="color: rgb(81, 90, 88); "
            >-</span
        ><span style="color: rgb(82, 92, 88); ">-</span><span style="color: rgb(85, 92, 87); "
            >-</span
        >
<span style="color: rgb(223, 195, 155); ">#</span><span style="color: rgb(222, 192, 152); ">*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(222, 193, 153); "
            >*</span
        ><span style="color: rgb(222, 194, 153); ">*</span><span style="color: rgb(221, 193, 152); "
            >*</span
        ><span style="color: rgb(220, 191, 150); ">*</span><span style="color: rgb(221, 193, 152); "
            >*</span
        ><span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(219, 191, 151); "
            >*</span
        ><span style="color: rgb(192, 166, 130); ">*</span><span style="color: rgb(211, 191, 164); "
            >*</span
        ><span style="color: rgb(216, 195, 169); ">*</span><span style="color: rgb(206, 187, 165); "
            >*</span
        ><span style="color: rgb(225, 206, 185); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(225, 206, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(161, 147, 131); ">+</span><span style="color: rgb(162, 149, 130); "
            >+</span
        ><span style="color: rgb(223, 203, 179); ">#</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 180); ">#</span><span style="color: rgb(223, 202, 179); "
            >#</span
        ><span style="color: rgb(217, 192, 164); ">*</span><span style="color: rgb(179, 139, 104); "
            >+</span
        ><span style="color: rgb(227, 172, 124); ">*</span><span style="color: rgb(226, 171, 124); "
            >*</span
        ><span style="color: rgb(226, 171, 123); ">*</span><span style="color: rgb(226, 172, 124); "
            >*</span
        ><span style="color: rgb(227, 172, 125); ">*</span><span style="color: rgb(227, 172, 126); "
            >*</span
        ><span style="color: rgb(227, 172, 125); ">*</span><span style="color: rgb(227, 172, 125); "
            >*</span
        ><span style="color: rgb(227, 171, 124); ">*</span><span style="color: rgb(217, 161, 114); "
            >*</span
        ><span style="color: rgb(197, 140, 95); ">+</span><span style="color: rgb(192, 136, 92); "
            >+</span
        ><span style="color: rgb(191, 136, 91); ">+</span><span style="color: rgb(191, 134, 88); "
            >+</span
        ><span style="color: rgb(190, 135, 90); ">+</span><span style="color: rgb(191, 136, 92); "
            >+</span
        ><span style="color: rgb(191, 136, 91); ">+</span><span style="color: rgb(193, 137, 93); "
            >+</span
        ><span style="color: rgb(163, 127, 98); ">=</span><span style="color: rgb(167, 155, 140); "
            >+</span
        ><span style="color: rgb(179, 169, 153); ">*</span><span style="color: rgb(179, 169, 154); "
            >*</span
        ><span style="color: rgb(181, 170, 154); ">*</span><span style="color: rgb(180, 169, 153); "
            >*</span
        ><span style="color: rgb(180, 169, 153); ">*</span><span style="color: rgb(180, 169, 153); "
            >*</span
        ><span style="color: rgb(166, 155, 139); ">+</span><span style="color: rgb(162, 154, 140); "
            >+</span
        ><span style="color: rgb(104, 101, 87); ">-</span><span style="color: rgb(121, 123, 111); "
            >=</span
        ><span style="color: rgb(115, 116, 103); ">=</span><span style="color: rgb(114, 117, 107); "
            >=</span
        ><span style="color: rgb(113, 118, 109); ">=</span><span style="color: rgb(97, 101, 94); "
            >-</span
        ><span style="color: rgb(101, 106, 99); ">-</span><span style="color: rgb(102, 107, 99); "
            >-</span
        ><span style="color: rgb(104, 111, 105); ">-</span><span style="color: rgb(106, 111, 101); "
            >-</span
        ><span style="color: rgb(107, 112, 104); ">-</span><span style="color: rgb(100, 106, 98); "
            >-</span
        ><span style="color: rgb(81, 90, 87); ">-</span><span style="color: rgb(82, 92, 90); "
            >-</span
        ><span style="color: rgb(83, 92, 89); ">-</span><span style="color: rgb(86, 94, 89); "
            >-</span
        >
<span style="color: rgb(223, 195, 156); ">#</span><span style="color: rgb(221, 193, 152); ">*</span
        ><span style="color: rgb(222, 193, 154); ">*</span><span style="color: rgb(221, 193, 154); "
            >*</span
        ><span style="color: rgb(220, 192, 152); ">*</span><span style="color: rgb(220, 192, 152); "
            >*</span
        ><span style="color: rgb(206, 180, 141); ">*</span><span style="color: rgb(212, 194, 171); "
            >*</span
        ><span style="color: rgb(224, 206, 185); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 205, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 185); ">#</span><span style="color: rgb(225, 205, 185); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(225, 205, 184); "
            >#</span
        ><span style="color: rgb(224, 206, 183); ">#</span><span style="color: rgb(224, 205, 184); "
            >#</span
        ><span style="color: rgb(226, 206, 185); ">#</span><span style="color: rgb(224, 205, 184); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(180, 166, 149); "
            >+</span
        ><span style="color: rgb(221, 201, 178); ">#</span><span style="color: rgb(187, 168, 148); "
            >*</span
        ><span style="color: rgb(226, 207, 183); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 203, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(222, 203, 179); ">#</span><span style="color: rgb(220, 199, 175); "
            >#</span
        ><span style="color: rgb(222, 200, 175); ">#</span><span style="color: rgb(160, 129, 99); "
            >=</span
        ><span style="color: rgb(229, 178, 131); ">*</span><span style="color: rgb(226, 171, 125); "
            >*</span
        ><span style="color: rgb(226, 174, 127); ">*</span><span style="color: rgb(226, 172, 125); "
            >*</span
        ><span style="color: rgb(226, 172, 125); ">*</span><span style="color: rgb(227, 171, 123); "
            >*</span
        ><span style="color: rgb(226, 171, 122); ">*</span><span style="color: rgb(225, 172, 125); "
            >*</span
        ><span style="color: rgb(226, 172, 123); ">*</span><span style="color: rgb(222, 169, 121); "
            >*</span
        ><span style="color: rgb(221, 169, 123); ">*</span><span style="color: rgb(141, 109, 80); "
            >=</span
        ><span style="color: rgb(216, 194, 169); ">*</span><span style="color: rgb(185, 174, 159); "
            >*</span
        ><span style="color: rgb(180, 170, 155); ">*</span><span style="color: rgb(179, 171, 156); "
            >*</span
        ><span style="color: rgb(180, 171, 157); ">*</span><span style="color: rgb(179, 169, 154); "
            >*</span
        ><span style="color: rgb(180, 170, 155); ">*</span><span style="color: rgb(180, 170, 154); "
            >*</span
        ><span style="color: rgb(180, 170, 153); ">*</span><span style="color: rgb(180, 170, 154); "
            >*</span
        ><span style="color: rgb(180, 168, 152); ">*</span><span style="color: rgb(180, 170, 153); "
            >*</span
        ><span style="color: rgb(181, 170, 154); ">*</span><span style="color: rgb(181, 169, 151); "
            >*</span
        ><span style="color: rgb(181, 168, 150); ">*</span><span style="color: rgb(182, 170, 154); "
            >*</span
        ><span style="color: rgb(173, 162, 147); ">+</span><span style="color: rgb(174, 165, 151); "
            >+</span
        ><span style="color: rgb(106, 103, 91); ">-</span><span style="color: rgb(102, 111, 104); "
            >-</span
        ><span style="color: rgb(104, 111, 104); ">-</span><span style="color: rgb(105, 111, 103); "
            >-</span
        ><span style="color: rgb(108, 113, 105); ">-</span><span style="color: rgb(101, 107, 99); "
            >-</span
        ><span style="color: rgb(82, 92, 90); ">-</span><span style="color: rgb(83, 91, 88); "
            >-</span
        ><span style="color: rgb(85, 94, 92); ">-</span><span style="color: rgb(85, 93, 88); "
            >-</span
        >
<span style="color: rgb(223, 194, 153); ">*</span><span style="color: rgb(222, 193, 153); ">*</span
        ><span style="color: rgb(222, 193, 152); ">*</span><span style="color: rgb(221, 192, 152); "
            >*</span
        ><span style="color: rgb(181, 155, 121); ">+</span><span style="color: rgb(223, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 207, 184); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(223, 205, 182); ">#</span><span style="color: rgb(224, 204, 183); "
            >#</span
        ><span style="color: rgb(205, 186, 165); ">*</span><span style="color: rgb(217, 197, 175); "
            >#</span
        ><span style="color: rgb(223, 204, 183); ">#</span><span style="color: rgb(223, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 184); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(226, 206, 184); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(226, 206, 184); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(226, 207, 184); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(223, 204, 181); "
            >#</span
        ><span style="color: rgb(197, 182, 167); ">*</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 183); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 203, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(223, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 180); ">#</span><span style="color: rgb(223, 202, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(223, 202, 179); "
            >#</span
        ><span style="color: rgb(223, 202, 177); ">#</span><span style="color: rgb(223, 202, 178); "
            >#</span
        ><span style="color: rgb(220, 199, 176); ">#</span><span style="color: rgb(185, 174, 157); "
            >*</span
        ><span style="color: rgb(180, 170, 155); ">*</span><span style="color: rgb(180, 171, 156); "
            >*</span
        ><span style="color: rgb(179, 170, 154); ">*</span><span style="color: rgb(180, 170, 155); "
            >*</span
        ><span style="color: rgb(178, 167, 153); ">+</span><span style="color: rgb(173, 164, 151); "
            >+</span
        ><span style="color: rgb(178, 168, 153); ">+</span><span style="color: rgb(180, 170, 154); "
            >*</span
        ><span style="color: rgb(180, 170, 155); ">*</span><span style="color: rgb(180, 170, 155); "
            >*</span
        ><span style="color: rgb(180, 171, 155); ">*</span><span style="color: rgb(181, 172, 155); "
            >*</span
        ><span style="color: rgb(181, 171, 155); ">*</span><span style="color: rgb(182, 171, 155); "
            >*</span
        ><span style="color: rgb(181, 171, 155); ">*</span><span style="color: rgb(181, 170, 152); "
            >*</span
        ><span style="color: rgb(181, 170, 155); ">*</span><span style="color: rgb(181, 170, 154); "
            >*</span
        ><span style="color: rgb(181, 171, 154); ">*</span><span style="color: rgb(182, 171, 154); "
            >*</span
        ><span style="color: rgb(182, 172, 155); ">*</span><span style="color: rgb(181, 170, 153); "
            >*</span
        ><span style="color: rgb(163, 154, 140); ">+</span><span style="color: rgb(99, 104, 99); "
            >-</span
        ><span style="color: rgb(85, 94, 91); ">-</span><span style="color: rgb(85, 94, 91); "
            >-</span
        ><span style="color: rgb(85, 95, 91); ">-</span><span style="color: rgb(88, 96, 91); "
            >-</span
        >
<span style="color: rgb(224, 195, 156); ">#</span><span style="color: rgb(222, 194, 154); ">*</span
        ><span style="color: rgb(208, 181, 141); ">*</span><span style="color: rgb(199, 182, 160); "
            >*</span
        ><span style="color: rgb(224, 205, 184); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 183); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(223, 204, 183); ">#</span><span style="color: rgb(196, 176, 153); "
            >*</span
        ><span style="color: rgb(224, 205, 184); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 206, 183); ">#</span><span style="color: rgb(225, 205, 185); "
            >#</span
        ><span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 183); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 207, 183); "
            >#</span
        ><span style="color: rgb(182, 161, 139); ">+</span><span style="color: rgb(219, 200, 177); "
            >#</span
        ><span style="color: rgb(207, 187, 164); ">*</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(223, 203, 180); ">#</span><span style="color: rgb(223, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(223, 203, 178); ">#</span><span style="color: rgb(216, 197, 174); "
            >#</span
        ><span style="color: rgb(204, 189, 168); ">*</span><span style="color: rgb(181, 171, 156); "
            >*</span
        ><span style="color: rgb(180, 170, 155); ">*</span><span style="color: rgb(180, 170, 155); "
            >*</span
        ><span style="color: rgb(180, 169, 154); ">*</span><span style="color: rgb(168, 158, 144); "
            >+</span
        ><span style="color: rgb(151, 138, 124); ">=</span><span style="color: rgb(184, 175, 160); "
            >*</span
        ><span style="color: rgb(180, 170, 154); ">*</span><span style="color: rgb(169, 159, 144); "
            >+</span
        ><span style="color: rgb(179, 169, 154); ">*</span><span style="color: rgb(181, 170, 156); "
            >*</span
        ><span style="color: rgb(181, 171, 154); ">*</span><span style="color: rgb(181, 170, 155); "
            >*</span
        ><span style="color: rgb(181, 171, 155); ">*</span><span style="color: rgb(180, 170, 153); "
            >*</span
        ><span style="color: rgb(181, 171, 154); ">*</span><span style="color: rgb(181, 171, 155); "
            >*</span
        ><span style="color: rgb(181, 170, 154); ">*</span><span style="color: rgb(182, 171, 155); "
            >*</span
        ><span style="color: rgb(182, 171, 154); ">*</span><span style="color: rgb(182, 171, 154); "
            >*</span
        ><span style="color: rgb(182, 172, 156); ">*</span><span style="color: rgb(182, 171, 155); "
            >*</span
        ><span style="color: rgb(193, 180, 162); ">*</span><span style="color: rgb(201, 186, 166); "
            >*</span
        ><span style="color: rgb(223, 202, 177); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(199, 184, 164); ">*</span><span style="color: rgb(114, 111, 101); "
            >-</span
        ><span style="color: rgb(87, 96, 93); ">-</span><span style="color: rgb(88, 97, 92); "
            >-</span
        >
<span style="color: rgb(222, 193, 153); ">*</span><span style="color: rgb(223, 195, 154); ">#</span
        ><span style="color: rgb(205, 185, 163); ">*</span><span style="color: rgb(224, 205, 184); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(225, 206, 185); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 182); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 206, 184); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(201, 182, 160); ">*</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(217, 199, 178); ">#</span><span style="color: rgb(213, 195, 175); "
            >*</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(224, 204, 183); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 205, 183); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 183); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(224, 205, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(223, 203, 181); "
            >#</span
        ><span style="color: rgb(179, 162, 142); ">+</span><span style="color: rgb(175, 162, 147); "
            >+</span
        ><span style="color: rgb(184, 174, 161); ">*</span><span style="color: rgb(188, 178, 165); "
            >*</span
        ><span style="color: rgb(187, 177, 163); ">*</span><span style="color: rgb(185, 175, 161); "
            >*</span
        ><span style="color: rgb(173, 164, 148); ">+</span><span style="color: rgb(153, 142, 127); "
            >+</span
        ><span style="color: rgb(187, 174, 156); ">*</span><span style="color: rgb(201, 186, 167); "
            >*</span
        ><span style="color: rgb(207, 190, 170); ">*</span><span style="color: rgb(199, 185, 166); "
            >*</span
        ><span style="color: rgb(181, 171, 154); ">*</span><span style="color: rgb(181, 171, 155); "
            >*</span
        ><span style="color: rgb(177, 167, 153); ">+</span><span style="color: rgb(169, 159, 143); "
            >+</span
        ><span style="color: rgb(193, 180, 162); ">*</span><span style="color: rgb(203, 189, 169); "
            >*</span
        ><span style="color: rgb(202, 187, 167); ">*</span><span style="color: rgb(197, 183, 163); "
            >*</span
        ><span style="color: rgb(194, 181, 163); ">*</span><span style="color: rgb(191, 179, 160); "
            >*</span
        ><span style="color: rgb(194, 181, 163); ">*</span><span style="color: rgb(199, 185, 164); "
            >*</span
        ><span style="color: rgb(204, 188, 167); ">*</span><span style="color: rgb(203, 187, 167); "
            >*</span
        ><span style="color: rgb(219, 199, 177); ">#</span><span style="color: rgb(224, 202, 178); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(223, 203, 178); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(224, 203, 178); ">#</span><span style="color: rgb(203, 188, 169); "
            >*</span
        ><span style="color: rgb(172, 164, 149); ">+</span><span style="color: rgb(89, 95, 89); "
            >-</span
        >
<span style="color: rgb(213, 184, 142); ">*</span><span style="color: rgb(220, 200, 178); ">#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 184); "
            >#</span
        ><span style="color: rgb(224, 205, 183); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(224, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(224, 204, 183); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(212, 194, 173); "
            >*</span
        ><span style="color: rgb(222, 204, 182); ">#</span><span style="color: rgb(224, 205, 184); "
            >#</span
        ><span style="color: rgb(216, 196, 173); ">#</span><span style="color: rgb(175, 163, 147); "
            >+</span
        ><span style="color: rgb(214, 196, 175); ">#</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(225, 206, 182); ">#</span><span style="color: rgb(226, 206, 183); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(218, 199, 176); ">#</span><span style="color: rgb(182, 162, 143); "
            >+</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(223, 203, 180); "
            >#</span
        ><span style="color: rgb(223, 203, 180); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(223, 202, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(223, 203, 179); ">#</span><span style="color: rgb(223, 203, 179); "
            >#</span
        ><span style="color: rgb(189, 178, 159); ">*</span><span style="color: rgb(181, 172, 156); "
            >*</span
        ><span style="color: rgb(181, 171, 155); ">*</span><span style="color: rgb(176, 165, 150); "
            >+</span
        ><span style="color: rgb(179, 169, 154); ">*</span><span style="color: rgb(217, 198, 175); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(223, 203, 179); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 178); ">#</span><span style="color: rgb(224, 204, 178); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 179); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(225, 204, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(222, 202, 177); "
            >#</span
        ><span style="color: rgb(185, 175, 158); ">*</span><span style="color: rgb(164, 155, 139); "
            >+</span
        >
<span style="color: rgb(188, 161, 128); ">+</span><span style="color: rgb(223, 204, 181); ">#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(226, 206, 184); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 206, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(226, 206, 185); "
            >#</span
        ><span style="color: rgb(226, 206, 184); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 184); ">#</span><span style="color: rgb(224, 206, 184); "
            >#</span
        ><span style="color: rgb(211, 192, 170); ">*</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(223, 203, 181); ">#</span><span style="color: rgb(177, 163, 147); "
            >+</span
        ><span style="color: rgb(194, 182, 166); ">*</span><span style="color: rgb(223, 202, 178); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 206, 183); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(223, 204, 182); ">#</span><span style="color: rgb(227, 207, 184); "
            >#</span
        ><span style="color: rgb(224, 203, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 178); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(223, 203, 178); "
            >#</span
        ><span style="color: rgb(191, 178, 160); ">*</span><span style="color: rgb(184, 175, 159); "
            >*</span
        ><span style="color: rgb(182, 172, 158); ">*</span><span style="color: rgb(181, 172, 156); "
            >*</span
        ><span style="color: rgb(173, 163, 148); ">+</span><span style="color: rgb(221, 201, 178); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(225, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 178); ">#</span><span style="color: rgb(224, 202, 178); "
            >#</span
        ><span style="color: rgb(223, 203, 179); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(225, 203, 179); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(225, 203, 180); "
            >#</span
        ><span style="color: rgb(200, 179, 153); ">*</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(224, 203, 178); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(187, 176, 159); ">*</span><span style="color: rgb(185, 174, 156); "
            >*</span
        >
<span style="color: rgb(223, 204, 183); ">#</span><span style="color: rgb(225, 204, 182); ">#</span
        ><span style="color: rgb(208, 192, 173); ">*</span><span style="color: rgb(202, 189, 170); "
            >*</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 206, 183); ">#</span><span style="color: rgb(225, 205, 184); "
            >#</span
        ><span style="color: rgb(224, 205, 183); ">#</span><span style="color: rgb(226, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 204, 184); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(207, 191, 172); ">*</span><span style="color: rgb(219, 200, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 182); ">#</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(211, 193, 171); "
            >*</span
        ><span style="color: rgb(224, 203, 182); ">#</span><span style="color: rgb(199, 188, 171); "
            >*</span
        ><span style="color: rgb(187, 175, 161); ">*</span><span style="color: rgb(220, 201, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(200, 186, 168); ">*</span><span style="color: rgb(196, 183, 166); "
            >*</span
        ><span style="color: rgb(224, 203, 181); ">#</span><span style="color: rgb(223, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 203, 182); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(195, 178, 157); ">*</span><span style="color: rgb(190, 178, 162); "
            >*</span
        ><span style="color: rgb(222, 202, 180); ">#</span><span style="color: rgb(223, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(223, 204, 180); ">#</span><span style="color: rgb(215, 197, 175); "
            >#</span
        ><span style="color: rgb(183, 172, 156); ">*</span><span style="color: rgb(183, 173, 157); "
            >*</span
        ><span style="color: rgb(183, 173, 157); ">*</span><span style="color: rgb(184, 174, 158); "
            >*</span
        ><span style="color: rgb(172, 160, 145); ">+</span><span style="color: rgb(223, 203, 178); "
            >#</span
        ><span style="color: rgb(222, 203, 179); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(223, 203, 179); ">#</span><span style="color: rgb(223, 202, 178); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(225, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(223, 203, 178); ">#</span><span style="color: rgb(190, 178, 160); "
            >*</span
        ><span style="color: rgb(215, 198, 175); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(190, 168, 144); ">*</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(187, 176, 159); ">*</span><span style="color: rgb(187, 175, 158); "
            >*</span
        >
<span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(221, 203, 182); ">#</span
        ><span style="color: rgb(192, 180, 164); ">*</span><span style="color: rgb(225, 205, 184); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(224, 205, 184); "
            >#</span
        ><span style="color: rgb(224, 205, 183); ">#</span><span style="color: rgb(224, 205, 184); "
            >#</span
        ><span style="color: rgb(224, 205, 184); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(216, 197, 175); ">#</span><span style="color: rgb(186, 176, 162); "
            >*</span
        ><span style="color: rgb(209, 193, 174); ">*</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(222, 203, 181); ">#</span><span style="color: rgb(207, 187, 165); "
            >*</span
        ><span style="color: rgb(223, 204, 182); ">#</span><span style="color: rgb(212, 196, 175); "
            >*</span
        ><span style="color: rgb(148, 135, 119); ">=</span><span style="color: rgb(186, 176, 161); "
            >*</span
        ><span style="color: rgb(223, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(197, 183, 165); ">*</span><span style="color: rgb(187, 177, 162); "
            >*</span
        ><span style="color: rgb(221, 201, 178); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(219, 199, 178); ">#</span><span style="color: rgb(179, 166, 149); "
            >+</span
        ><span style="color: rgb(183, 172, 157); ">*</span><span style="color: rgb(200, 186, 167); "
            >*</span
        ><span style="color: rgb(217, 198, 175); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(223, 203, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(215, 195, 171); ">*</span><span style="color: rgb(223, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 179); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(225, 204, 179); "
            >#</span
        ><span style="color: rgb(219, 200, 177); ">#</span><span style="color: rgb(187, 175, 158); "
            >*</span
        ><span style="color: rgb(204, 189, 169); ">*</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(206, 186, 163); ">*</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(225, 204, 178); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(187, 176, 160); ">*</span><span style="color: rgb(187, 175, 157); "
            >*</span
        >
<span style="color: rgb(223, 204, 182); ">#</span><span style="color: rgb(191, 181, 164); ">*</span
        ><span style="color: rgb(207, 193, 174); ">*</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 205, 184); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(224, 205, 184); "
            >#</span
        ><span style="color: rgb(224, 205, 183); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(223, 204, 182); ">#</span><span style="color: rgb(160, 143, 125); "
            >+</span
        ><span style="color: rgb(186, 176, 161); ">*</span><span style="color: rgb(205, 190, 172); "
            >*</span
        ><span style="color: rgb(223, 204, 181); ">#</span><span style="color: rgb(223, 204, 181); "
            >#</span
        ><span style="color: rgb(188, 168, 144); ">*</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(190, 181, 167); ">*</span><span style="color: rgb(186, 175, 161); "
            >*</span
        ><span style="color: rgb(222, 203, 181); ">#</span><span style="color: rgb(222, 203, 179); "
            >#</span
        ><span style="color: rgb(191, 181, 165); ">*</span><span style="color: rgb(184, 175, 159); "
            >*</span
        ><span style="color: rgb(220, 201, 178); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(223, 203, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(212, 194, 171); ">*</span><span style="color: rgb(161, 149, 133); "
            >+</span
        ><span style="color: rgb(194, 181, 163); ">*</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(231, 209, 185); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(225, 204, 178); ">#</span><span style="color: rgb(205, 189, 169); "
            >*</span
        ><span style="color: rgb(187, 177, 161); ">*</span><span style="color: rgb(187, 176, 160); "
            >*</span
        >
<span style="color: rgb(205, 190, 170); ">*</span><span style="color: rgb(154, 139, 121); ">=</span
        ><span style="color: rgb(224, 205, 183); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 205, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 205, 184); ">#</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(217, 198, 178); "
            >#</span
        ><span style="color: rgb(178, 167, 152); ">+</span><span style="color: rgb(186, 176, 161); "
            >*</span
        ><span style="color: rgb(210, 193, 174); ">*</span><span style="color: rgb(223, 204, 182); "
            >#</span
        ><span style="color: rgb(219, 200, 179); ">#</span><span style="color: rgb(209, 188, 165); "
            >*</span
        ><span style="color: rgb(169, 160, 145); ">+</span><span style="color: rgb(180, 169, 154); "
            >*</span
        ><span style="color: rgb(209, 193, 173); ">*</span><span style="color: rgb(219, 201, 179); "
            >#</span
        ><span style="color: rgb(185, 175, 161); ">*</span><span style="color: rgb(185, 176, 162); "
            >*</span
        ><span style="color: rgb(207, 192, 172); ">*</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 206, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 180); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(226, 205, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(208, 192, 171); ">*</span><span style="color: rgb(185, 174, 159); "
            >*</span
        ><span style="color: rgb(186, 174, 159); ">*</span><span style="color: rgb(222, 201, 176); "
            >#</span
        ><span style="color: rgb(220, 198, 173); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(224, 203, 178); ">#</span><span style="color: rgb(174, 159, 141); "
            >+</span
        ><span style="color: rgb(187, 176, 159); ">*</span><span style="color: rgb(187, 175, 158); "
            >*</span
        >
<span style="color: rgb(177, 165, 148); ">+</span><span style="color: rgb(217, 197, 176); ">#</span
        ><span style="color: rgb(224, 204, 183); ">#</span><span style="color: rgb(225, 207, 185); "
            >#</span
        ><span style="color: rgb(224, 205, 184); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 205, 184); ">#</span><span style="color: rgb(224, 205, 184); "
            >#</span
        ><span style="color: rgb(186, 173, 155); ">*</span><span style="color: rgb(185, 177, 162); "
            >*</span
        ><span style="color: rgb(186, 176, 162); ">*</span><span style="color: rgb(205, 190, 171); "
            >*</span
        ><span style="color: rgb(223, 203, 180); ">#</span><span style="color: rgb(194, 173, 151); "
            >*</span
        ><span style="color: rgb(175, 166, 151); ">+</span><span style="color: rgb(180, 169, 153); "
            >*</span
        ><span style="color: rgb(206, 190, 171); ">*</span><span style="color: rgb(212, 193, 171); "
            >*</span
        ><span style="color: rgb(183, 174, 160); ">*</span><span style="color: rgb(185, 177, 163); "
            >*</span
        ><span style="color: rgb(183, 174, 161); ">*</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 206, 183); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 204, 182); "
            >#</span
        ><span style="color: rgb(227, 206, 184); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 206, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(226, 206, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(226, 206, 183); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(190, 178, 160); ">*</span><span style="color: rgb(189, 179, 164); "
            >*</span
        ><span style="color: rgb(189, 178, 163); ">*</span><span style="color: rgb(215, 195, 170); "
            >*</span
        ><span style="color: rgb(197, 177, 153); ">*</span><span style="color: rgb(225, 204, 179); "
            >#</span
        ><span style="color: rgb(191, 177, 161); ">*</span><span style="color: rgb(160, 146, 128); "
            >+</span
        ><span style="color: rgb(188, 176, 160); ">*</span><span style="color: rgb(187, 175, 157); "
            >*</span
        >
<span style="color: rgb(192, 174, 154); ">*</span><span style="color: rgb(225, 206, 184); ">#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 206, 185); "
            >#</span
        ><span style="color: rgb(224, 206, 185); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(225, 206, 183); ">#</span><span style="color: rgb(225, 205, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 185); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(225, 205, 184); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(224, 205, 184); "
            >#</span
        ><span style="color: rgb(222, 202, 180); ">#</span><span style="color: rgb(170, 158, 144); "
            >+</span
        ><span style="color: rgb(185, 175, 161); ">*</span><span style="color: rgb(185, 176, 162); "
            >*</span
        ><span style="color: rgb(207, 190, 170); ">*</span><span style="color: rgb(222, 202, 178); "
            >#</span
        ><span style="color: rgb(173, 162, 147); ">+</span><span style="color: rgb(187, 178, 165); "
            >*</span
        ><span style="color: rgb(204, 189, 169); ">*</span><span style="color: rgb(163, 152, 137); "
            >+</span
        ><span style="color: rgb(184, 174, 160); ">*</span><span style="color: rgb(184, 174, 160); "
            >*</span
        ><span style="color: rgb(163, 151, 137); ">+</span><span style="color: rgb(223, 203, 180); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(225, 206, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(226, 205, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 203, 179); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(225, 203, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(185, 174, 158); ">*</span><span style="color: rgb(184, 172, 154); "
            >*</span
        ><span style="color: rgb(168, 155, 140); ">+</span><span style="color: rgb(185, 173, 157); "
            >*</span
        ><span style="color: rgb(211, 193, 172); ">*</span><span style="color: rgb(200, 185, 165); "
            >*</span
        ><span style="color: rgb(161, 147, 130); ">+</span><span style="color: rgb(186, 174, 157); "
            >*</span
        ><span style="color: rgb(187, 176, 160); ">*</span><span style="color: rgb(188, 175, 158); "
            >*</span
        >
<span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 206, 182); ">#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 206, 183); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 206, 184); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 184); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(205, 186, 165); "
            >*</span
        ><span style="color: rgb(183, 172, 158); ">*</span><span style="color: rgb(185, 176, 161); "
            >*</span
        ><span style="color: rgb(186, 176, 162); ">*</span><span style="color: rgb(212, 195, 175); "
            >*</span
        ><span style="color: rgb(210, 194, 174); ">*</span><span style="color: rgb(183, 174, 161); "
            >*</span
        ><span style="color: rgb(178, 166, 151); ">+</span><span style="color: rgb(183, 173, 156); "
            >*</span
        ><span style="color: rgb(185, 176, 161); ">*</span><span style="color: rgb(184, 174, 158); "
            >*</span
        ><span style="color: rgb(142, 130, 116); ">=</span><span style="color: rgb(223, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(226, 205, 182); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(226, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(225, 203, 179); "
            >#</span
        ><span style="color: rgb(225, 203, 179); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(186, 177, 160); ">*</span><span style="color: rgb(186, 176, 162); "
            >*</span
        ><span style="color: rgb(159, 145, 128); ">+</span><span style="color: rgb(169, 158, 143); "
            >+</span
        ><span style="color: rgb(186, 175, 158); ">*</span><span style="color: rgb(181, 169, 152); "
            >*</span
        ><span style="color: rgb(184, 172, 154); ">*</span><span style="color: rgb(187, 175, 159); "
            >*</span
        ><span style="color: rgb(187, 175, 158); ">*</span><span style="color: rgb(187, 175, 159); "
            >*</span
        >
<span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 204, 182); ">#</span
        ><span style="color: rgb(225, 206, 183); ">#</span><span style="color: rgb(225, 206, 185); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(223, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(200, 181, 161); ">*</span><span style="color: rgb(187, 178, 162); "
            >*</span
        ><span style="color: rgb(185, 176, 162); ">*</span><span style="color: rgb(186, 176, 161); "
            >*</span
        ><span style="color: rgb(216, 198, 177); ">#</span><span style="color: rgb(171, 161, 145); "
            >+</span
        ><span style="color: rgb(181, 171, 157); ">*</span><span style="color: rgb(184, 174, 160); "
            >*</span
        ><span style="color: rgb(184, 175, 161); ">*</span><span style="color: rgb(185, 175, 162); "
            >*</span
        ><span style="color: rgb(179, 171, 158); ">*</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(224, 205, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 178); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 179); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(210, 193, 172); "
            >*</span
        ><span style="color: rgb(185, 174, 157); ">*</span><span style="color: rgb(185, 175, 159); "
            >*</span
        ><span style="color: rgb(174, 163, 147); ">+</span><span style="color: rgb(165, 154, 138); "
            >+</span
        ><span style="color: rgb(186, 175, 158); ">*</span><span style="color: rgb(164, 151, 134); "
            >+</span
        ><span style="color: rgb(187, 176, 159); ">*</span><span style="color: rgb(186, 175, 157); "
            >*</span
        ><span style="color: rgb(187, 175, 156); ">*</span><span style="color: rgb(188, 176, 158); "
            >*</span
        >
<span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(225, 205, 182); ">#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(226, 206, 183); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(226, 206, 183); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 204, 183); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 206, 183); ">#</span><span style="color: rgb(224, 205, 183); "
            >#</span
        ><span style="color: rgb(223, 204, 181); ">#</span><span style="color: rgb(199, 180, 158); "
            >*</span
        ><span style="color: rgb(185, 175, 161); ">*</span><span style="color: rgb(185, 175, 160); "
            >*</span
        ><span style="color: rgb(185, 175, 160); ">*</span><span style="color: rgb(203, 185, 165); "
            >*</span
        ><span style="color: rgb(160, 149, 133); ">+</span><span style="color: rgb(184, 175, 161); "
            >*</span
        ><span style="color: rgb(185, 175, 161); ">*</span><span style="color: rgb(171, 161, 146); "
            >+</span
        ><span style="color: rgb(179, 169, 155); ">*</span><span style="color: rgb(223, 202, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 206, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(226, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 179); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(225, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(198, 184, 165); "
            >*</span
        ><span style="color: rgb(185, 174, 159); ">*</span><span style="color: rgb(186, 174, 158); "
            >*</span
        ><span style="color: rgb(165, 154, 138); ">+</span><span style="color: rgb(183, 173, 158); "
            >*</span
        ><span style="color: rgb(159, 145, 128); ">+</span><span style="color: rgb(187, 175, 158); "
            >*</span
        ><span style="color: rgb(188, 177, 160); ">*</span><span style="color: rgb(188, 176, 158); "
            >*</span
        ><span style="color: rgb(187, 176, 159); ">*</span><span style="color: rgb(189, 176, 159); "
            >*</span
        >
<span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); ">#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 206, 183); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 206, 183); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 183); "
            >#</span
        ><span style="color: rgb(224, 205, 183); ">#</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(223, 204, 181); "
            >#</span
        ><span style="color: rgb(211, 192, 170); ">*</span><span style="color: rgb(169, 156, 141); "
            >+</span
        ><span style="color: rgb(184, 175, 160); ">*</span><span style="color: rgb(183, 175, 160); "
            >*</span
        ><span style="color: rgb(158, 146, 131); ">+</span><span style="color: rgb(184, 176, 161); "
            >*</span
        ><span style="color: rgb(184, 175, 160); ">*</span><span style="color: rgb(181, 171, 158); "
            >*</span
        ><span style="color: rgb(204, 189, 170); ">*</span><span style="color: rgb(223, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 206, 184); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 180); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(226, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 179); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(221, 201, 177); ">#</span><span style="color: rgb(190, 178, 160); "
            >*</span
        ><span style="color: rgb(186, 175, 159); ">*</span><span style="color: rgb(187, 174, 157); "
            >*</span
        ><span style="color: rgb(181, 174, 163); ">*</span><span style="color: rgb(174, 167, 156); "
            >+</span
        ><span style="color: rgb(182, 171, 156); ">*</span><span style="color: rgb(187, 176, 157); "
            >*</span
        ><span style="color: rgb(188, 176, 158); ">*</span><span style="color: rgb(186, 176, 159); "
            >*</span
        ><span style="color: rgb(188, 177, 161); ">*</span><span style="color: rgb(188, 177, 160); "
            >*</span
        >
<span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(225, 204, 182); ">#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 206, 182); "
            >#</span
        ><span style="color: rgb(226, 205, 183); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(222, 202, 180); ">#</span><span style="color: rgb(201, 187, 168); "
            >*</span
        ><span style="color: rgb(221, 201, 178); ">#</span><span style="color: rgb(215, 197, 177); "
            >#</span
        ><span style="color: rgb(161, 148, 133); ">+</span><span style="color: rgb(184, 174, 158); "
            >*</span
        ><span style="color: rgb(191, 181, 167); ">*</span><span style="color: rgb(185, 174, 160); "
            >*</span
        ><span style="color: rgb(186, 177, 163); ">*</span><span style="color: rgb(187, 177, 164); "
            >*</span
        ><span style="color: rgb(220, 202, 178); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 179); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(226, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 179); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(226, 205, 182); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(225, 204, 179); ">#</span><span style="color: rgb(225, 203, 178); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(225, 204, 179); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(220, 200, 175); ">#</span><span style="color: rgb(186, 176, 160); "
            >*</span
        ><span style="color: rgb(186, 175, 157); ">*</span><span style="color: rgb(186, 175, 159); "
            >*</span
        ><span style="color: rgb(173, 163, 151); ">+</span><span style="color: rgb(166, 163, 152); "
            >+</span
        ><span style="color: rgb(187, 176, 160); ">*</span><span style="color: rgb(187, 176, 158); "
            >*</span
        ><span style="color: rgb(188, 176, 160); ">*</span><span style="color: rgb(187, 176, 159); "
            >*</span
        ><span style="color: rgb(187, 176, 159); ">*</span><span style="color: rgb(187, 175, 158); "
            >*</span
        >
<span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(225, 205, 181); ">#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(224, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(224, 204, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 182); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 203, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(190, 178, 162); ">*</span><span style="color: rgb(186, 176, 161); "
            >*</span
        ><span style="color: rgb(186, 177, 163); ">*</span><span style="color: rgb(186, 177, 161); "
            >*</span
        ><span style="color: rgb(186, 176, 161); ">*</span><span style="color: rgb(185, 175, 160); "
            >*</span
        ><span style="color: rgb(163, 151, 135); ">+</span><span style="color: rgb(184, 175, 161); "
            >*</span
        ><span style="color: rgb(184, 175, 161); ">*</span><span style="color: rgb(186, 176, 162); "
            >*</span
        ><span style="color: rgb(220, 201, 178); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(225, 204, 183); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 203, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 183); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 206, 182); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(224, 203, 178); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(187, 177, 160); ">*</span><span style="color: rgb(186, 176, 160); "
            >*</span
        ><span style="color: rgb(186, 175, 159); ">*</span><span style="color: rgb(186, 176, 160); "
            >*</span
        ><span style="color: rgb(180, 173, 161); ">*</span><span style="color: rgb(186, 175, 158); "
            >*</span
        ><span style="color: rgb(186, 176, 160); ">*</span><span style="color: rgb(186, 175, 159); "
            >*</span
        ><span style="color: rgb(187, 175, 158); ">*</span><span style="color: rgb(187, 175, 158); "
            >*</span
        ><span style="color: rgb(188, 177, 158); ">*</span><span style="color: rgb(187, 176, 158); "
            >*</span
        >
<span style="color: rgb(193, 170, 146); ">*</span><span style="color: rgb(178, 153, 128); ">+</span
        ><span style="color: rgb(180, 154, 127); ">+</span><span style="color: rgb(190, 167, 144); "
            >*</span
        ><span style="color: rgb(223, 202, 179); ">#</span><span style="color: rgb(224, 203, 181); "
            >#</span
        ><span style="color: rgb(223, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(223, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(194, 182, 165); ">*</span><span style="color: rgb(187, 177, 162); "
            >*</span
        ><span style="color: rgb(185, 176, 162); ">*</span><span style="color: rgb(186, 175, 160); "
            >*</span
        ><span style="color: rgb(185, 175, 159); ">*</span><span style="color: rgb(180, 170, 155); "
            >*</span
        ><span style="color: rgb(184, 175, 161); ">*</span><span style="color: rgb(160, 148, 134); "
            >+</span
        ><span style="color: rgb(185, 174, 159); ">*</span><span style="color: rgb(196, 184, 167); "
            >*</span
        ><span style="color: rgb(223, 203, 178); ">#</span><span style="color: rgb(223, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 205, 182); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 205, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 182); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(202, 187, 168); "
            >*</span
        ><span style="color: rgb(186, 175, 160); ">*</span><span style="color: rgb(223, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 179); ">#</span><span style="color: rgb(206, 190, 170); "
            >*</span
        ><span style="color: rgb(186, 176, 159); ">*</span><span style="color: rgb(186, 174, 158); "
            >*</span
        ><span style="color: rgb(186, 175, 159); ">*</span><span style="color: rgb(186, 175, 158); "
            >*</span
        ><span style="color: rgb(191, 180, 164); ">*</span><span style="color: rgb(186, 176, 161); "
            >*</span
        ><span style="color: rgb(187, 175, 158); ">*</span><span style="color: rgb(187, 176, 159); "
            >*</span
        ><span style="color: rgb(187, 175, 159); ">*</span><span style="color: rgb(187, 175, 158); "
            >*</span
        ><span style="color: rgb(188, 176, 160); ">*</span><span style="color: rgb(188, 176, 160); "
            >*</span
        >
<span style="color: rgb(177, 167, 154); ">+</span><span style="color: rgb(192, 142, 101); ">+</span
        ><span style="color: rgb(200, 143, 99); ">+</span><span style="color: rgb(198, 143, 99); "
            >+</span
        ><span style="color: rgb(198, 141, 97); ">+</span><span style="color: rgb(199, 143, 99); "
            >+</span
        ><span style="color: rgb(191, 137, 95); ">+</span><span style="color: rgb(192, 149, 112); "
            >+</span
        ><span style="color: rgb(199, 178, 154); ">*</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 203, 181); ">#</span><span style="color: rgb(223, 204, 180); "
            >#</span
        ><span style="color: rgb(223, 203, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(210, 193, 172); ">*</span><span style="color: rgb(186, 176, 159); "
            >*</span
        ><span style="color: rgb(187, 176, 160); ">*</span><span style="color: rgb(186, 177, 162); "
            >*</span
        ><span style="color: rgb(185, 175, 160); ">*</span><span style="color: rgb(156, 144, 126); "
            >+</span
        ><span style="color: rgb(162, 151, 135); ">+</span><span style="color: rgb(185, 174, 159); "
            >*</span
        ><span style="color: rgb(186, 175, 160); ">*</span><span style="color: rgb(198, 184, 166); "
            >*</span
        ><span style="color: rgb(223, 203, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(220, 201, 178); ">#</span><span style="color: rgb(189, 177, 161); "
            >*</span
        ><span style="color: rgb(205, 189, 169); ">*</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 205, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 205, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(225, 205, 182); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 204, 179); "
            >#</span
        ><span style="color: rgb(224, 203, 178); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 180); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 202, 179); ">#</span><span style="color: rgb(223, 203, 179); "
            >#</span
        ><span style="color: rgb(203, 188, 168); ">*</span><span style="color: rgb(185, 174, 156); "
            >*</span
        ><span style="color: rgb(198, 185, 165); ">*</span><span style="color: rgb(223, 203, 179); "
            >#</span
        ><span style="color: rgb(223, 202, 177); ">#</span><span style="color: rgb(187, 174, 157); "
            >*</span
        ><span style="color: rgb(187, 176, 160); ">*</span><span style="color: rgb(186, 175, 159); "
            >*</span
        ><span style="color: rgb(186, 174, 158); ">*</span><span style="color: rgb(185, 174, 158); "
            >*</span
        ><span style="color: rgb(185, 174, 158); ">*</span><span style="color: rgb(186, 175, 158); "
            >*</span
        ><span style="color: rgb(186, 174, 158); ">*</span><span style="color: rgb(187, 175, 160); "
            >*</span
        ><span style="color: rgb(188, 176, 159); ">*</span><span style="color: rgb(187, 176, 160); "
            >*</span
        ><span style="color: rgb(187, 176, 159); ">*</span><span style="color: rgb(187, 177, 161); "
            >*</span
        >
<span style="color: rgb(172, 160, 146); ">+</span><span style="color: rgb(191, 140, 99); ">+</span
        ><span style="color: rgb(205, 152, 108); ">+</span><span style="color: rgb(209, 155, 111); "
            >+</span
        ><span style="color: rgb(198, 143, 98); ">+</span><span style="color: rgb(199, 144, 102); "
            >+</span
        ><span style="color: rgb(197, 141, 98); ">+</span><span style="color: rgb(197, 142, 97); "
            >+</span
        ><span style="color: rgb(199, 145, 101); ">+</span><span style="color: rgb(198, 141, 96); "
            >+</span
        ><span style="color: rgb(195, 142, 99); ">+</span><span style="color: rgb(199, 147, 106); "
            >+</span
        ><span style="color: rgb(174, 143, 112); ">+</span><span style="color: rgb(224, 203, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 182); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(186, 175, 157); "
            >*</span
        ><span style="color: rgb(187, 178, 162); ">*</span><span style="color: rgb(186, 176, 159); "
            >*</span
        ><span style="color: rgb(186, 176, 160); ">*</span><span style="color: rgb(151, 137, 120); "
            >=</span
        ><span style="color: rgb(184, 173, 158); ">*</span><span style="color: rgb(184, 175, 159); "
            >*</span
        ><span style="color: rgb(186, 176, 161); ">*</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(223, 203, 179); ">#</span><span style="color: rgb(217, 198, 176); "
            >#</span
        ><span style="color: rgb(186, 176, 160); ">*</span><span style="color: rgb(187, 177, 161); "
            >*</span
        ><span style="color: rgb(224, 203, 180); ">#</span><span style="color: rgb(223, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 205, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(225, 205, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 178); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(225, 204, 181); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(224, 204, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(223, 203, 178); "
            >#</span
        ><span style="color: rgb(225, 203, 180); ">#</span><span style="color: rgb(224, 204, 178); "
            >#</span
        ><span style="color: rgb(225, 205, 180); ">#</span><span style="color: rgb(224, 203, 178); "
            >#</span
        ><span style="color: rgb(223, 203, 179); ">#</span><span style="color: rgb(225, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 205, 181); ">#</span><span style="color: rgb(224, 203, 179); "
            >#</span
        ><span style="color: rgb(224, 204, 179); ">#</span><span style="color: rgb(224, 204, 181); "
            >#</span
        ><span style="color: rgb(224, 204, 181); ">#</span><span style="color: rgb(224, 203, 180); "
            >#</span
        ><span style="color: rgb(224, 204, 180); ">#</span><span style="color: rgb(193, 180, 162); "
            >*</span
        ><span style="color: rgb(187, 176, 160); ">*</span><span style="color: rgb(187, 176, 160); "
            >*</span
        ><span style="color: rgb(213, 195, 173); ">*</span><span style="color: rgb(223, 203, 178); "
            >#</span
        ><span style="color: rgb(190, 179, 162); ">*</span><span style="color: rgb(186, 175, 159); "
            >*</span
        ><span style="color: rgb(186, 175, 160); ">*</span><span style="color: rgb(186, 174, 158); "
            >*</span
        ><span style="color: rgb(186, 176, 160); ">*</span><span style="color: rgb(186, 175, 158); "
            >*</span
        ><span style="color: rgb(167, 154, 136); ">+</span><span style="color: rgb(186, 173, 154); "
            >*</span
        ><span style="color: rgb(186, 174, 158); ">*</span><span style="color: rgb(187, 175, 160); "
            >*</span
        ><span style="color: rgb(186, 175, 158); ">*</span><span style="color: rgb(187, 175, 158); "
            >*</span
        ><span style="color: rgb(188, 177, 160); ">*</span><span style="color: rgb(187, 175, 157); "
            >*</span
        >
</pre>
    <div class="absolute inset-0 bg-base animate-slide-down"></div>
</div>
